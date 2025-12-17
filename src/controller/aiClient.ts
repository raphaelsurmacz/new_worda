// src/controller/aiClient.ts
export type AskAIOptions = {
  context?: Record<string, unknown>;
  max_recommendations?: number;
  // Se você quiser enviar também catálogo/pacote pelo front (opcional):
  procedures?: Array<Record<string, unknown>>;
};

export type AskAIResponse = {
  rawText: string;                 // texto bruto de resposta (pode ser JSON string)
  modelUsed?: string;
  latencyMs?: number;
  finishReason?: string;
  items?: Array<{
    service_id?: string;
    name?: string;
    reason?: string;
    benefit_for_client?: string;
    reasoning_summary?: string;
  }>;
};

const API_BASE =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_API_BASE_URL) ||
  process.env.VITE_API_BASE_URL ||
  ""; // ex: "https://api.seudominio.com"

function safeParseJSON(s: string): any | null {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

export async function askGeminiViaBackend(
  text: string,
  options: AskAIOptions = {}
): Promise<AskAIResponse> {
  if (!API_BASE) {
    throw new Error("VITE_API_BASE_URL não configurado no front.");
  }

  const url = `${API_BASE}/api/v1/ai/text`;

  const payload: Record<string, unknown> = {
    text,
  };

  if (options.max_recommendations != null) {
    payload.max_recommendations = options.max_recommendations;
  }
  if (options.context) {
    payload.context = options.context;
  }
  if (options.procedures) {
    payload.procedures = options.procedures; // opcional: se quiser mandar o catálogo do lado do cliente
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
    credentials: "include", // se tua API usa sessão/cookie
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`IA falhou (${res.status}): ${msg || res.statusText}`);
  }

  const data = await res.json();

  const rawText: string = typeof data?.text === "string" ? data.text : JSON.stringify(data);
  const parsed = safeParseJSON(rawText);

  let items: AskAIResponse["items"] | undefined = undefined;
  if (parsed && Array.isArray(parsed.items)) {
    items = parsed.items;
  }

  return {
    rawText,
    items,
    modelUsed: data?.model_used,
    latencyMs: data?.latency_ms,
    finishReason: data?.finish_reason,
  };
}
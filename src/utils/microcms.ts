import { createClient } from "microcms-js-sdk";
import type { MicroCMSWork, MicroCMSListResponse } from "@/types";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MicroCMSのサービスドメインが環境変数に設定されていません。");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MicroCMSのAPIキーが環境変数に設定されていません。");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

/**
 * 制作物一覧を取得する
 */
export const getWorks = async (): Promise<
  MicroCMSListResponse<MicroCMSWork>
> => {
  const data = await client.getList<MicroCMSWork>({
    endpoint: "works",
  });

  return data;
};

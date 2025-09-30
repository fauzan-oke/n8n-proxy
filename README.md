# n8n-proxy


Proxy ringan berbasis Vercel untuk meneruskan request Telegram webhook ke n8n self-hosted.

## 🚀 Deploy ke Vercel

1. Fork atau clone repo ini
2. Push ke GitHub
3. Import project di [Vercel](https://vercel.com)
4. Deploy → akan dapat URL misalnya `https://n8n-proxy.vercel.app`

## 🔗 Set Webhook Telegram

```bash
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://n8n-proxy.vercel.app/webhook-test/xxxx/webhook"

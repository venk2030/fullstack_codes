# /api/track/

This endpoint accepts analytics event data from the frontend.

## Method: `POST`

### Payload Example:

```json
{
  "event_name": "button_click",
  "client_id": "1234-5678-9012",
  "ts": "2025-08-08T12:00:00Z",
  "event_params": {
    "page": "/",
    "label": "top_cta"
  }
}

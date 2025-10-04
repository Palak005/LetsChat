### 🧩 Subscription & Usage Limits

Free users can swipe up to **5 cards per day**.  
Logic implemented via:

- `checkSwipeLimit.js` middleware (resets daily, validates usage)
- `User` model fields: `plan`, `swipeCount`, `lastSwipeDate`
- `handleSwipe` controller increments count after successful swipe

When the daily limit is reached, the backend blocks further swipes with:

```json
{ "message": "Swipe limit reached for today. Upgrade your plan to continue." }
```

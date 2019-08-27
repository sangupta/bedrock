```js
import Utils from './../../BedrockUtils';

let current = Date.now();

<ul>
    <li>Now: <TimeAgo millis={current} /></li>
    <li>1 min: <TimeAgo millis={current - Utils.ONE_MINUTE  - Utils.ONE_SECOND} /></li>
    <li>10 min: <TimeAgo millis={current - 10 * Utils.ONE_MINUTE} /></li>
    <li>1 hour: <TimeAgo millis={current - Utils.ONE_HOUR - Utils.ONE_MINUTE} /></li>
    <li>10 hours: <TimeAgo millis={current - 10 * Utils.ONE_HOUR} /></li>
    <li>1 day: <TimeAgo millis={current - Utils.ONE_DAY - Utils.ONE_HOUR} /></li>
    <li>3 days: <TimeAgo millis={current - 3 * Utils.ONE_DAY} /></li>
    <li>10 days: <TimeAgo millis={current - 10 * Utils.ONE_DAY} /></li>
    <li>24 days: <TimeAgo millis={current - 24 * Utils.ONE_DAY} /></li>
    <li>1 month: <TimeAgo millis={current - Utils.ONE_MONTH - Utils.ONE_DAY} /></li>
    <li>5 months: <TimeAgo millis={current - 5 * Utils.ONE_MONTH} /></li>
    <li>1 year: <TimeAgo millis={current - Utils.ONE_YEAR - Utils.ONE_MONTH} /></li>
    <li>3 years: <TimeAgo millis={current - 3 * Utils.ONE_YEAR} /></li>
</ul>
```

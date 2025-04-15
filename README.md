Thought Process -->
This alert dashboard was built to simulate a real-time threat monitoring environment. The design focuses on clarity, motion, and responsiveness to ensure analysts can quickly scan alert trends. Each alert type (Ignored Alerts, Wrongly Closed Alerts, Active Threats) is represented as a card with dynamic counters and animated alert drops, mimicking real-world security feeds. Tailwind CSS was used for fast, consistent styling, while responsiveness across desktop, tablet, and mobile was a top priority to ensure accessibility from any device.

Animation Library Used -->
We used Framer Motion to handle animations like alert drops, counter bounces, and card transitions. It's lightweight, React-friendly, and offers smooth physics-based animations, which helped bring the dashboard to life without compromising performance.

Known Issues & Future Improvements -->
Alerts are randomly generated and not persisted; using a backend or WebSocket feed would better simulate real-time behavior.
There's currently no rate limiter or overflow handling for excessive alerts.
With more time, improvements would include adding a filter/search for alerts, sound notifications for high-risk threats, user-configurable alert types, and dark mode support.


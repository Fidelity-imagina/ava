import { Skeleton, SkeletonRows } from "@fidelity-imagina/ui";

// Shown while a staff page loads, so every click answers at once (400ms rule, DECISIONS.md).
export default function Loading() {
  return (
    <div style={{ display: "grid", gap: 24, padding: "24px var(--gutter)" }}>
      <Skeleton width={220} height={24} />
      <SkeletonRows rows={5} />
    </div>
  );
}

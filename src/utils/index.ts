export function capitalize(str?: string | null) {
    if (!str) return '';
    return str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
}

export function cssVars(vars: Record<string, string | number>): React.CSSProperties & { [key: `--${string}`]: string } {
  const casted = {} as Record<string, string>;
  for (const key in vars) {
    casted[key] = String(vars[key]);
  }
  return casted as React.CSSProperties & { [key: `--${string}`]: string };
}

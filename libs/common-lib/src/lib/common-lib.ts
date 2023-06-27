export function commonLib(): string {
  return 'common-lib';
}

export const tryCatch = <T>(fn: () => T, defaultValue: T): T => {
  try {
    return fn();
  } catch (e) {
    return defaultValue;
  }
};

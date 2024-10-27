export function setHtmlStyle(options: any) {
  if (typeof window !== 'undefined') {
    const mappedArray = Object.entries(options).map(([key, value]) => ({
      key,
      value,
    }));
    mappedArray.map((item) => {
      document.documentElement.style[item.key as any] = item.value as string;
    });
  }
}

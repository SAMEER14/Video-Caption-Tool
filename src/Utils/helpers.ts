export const isValidVideoUrl = (url: string): boolean => {
    const regex = /(vimeo|drive.google.com)/;
    return regex.test(url);
  };
  
  export const formatTimestamp = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  
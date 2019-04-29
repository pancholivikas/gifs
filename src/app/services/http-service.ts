export function httpService(url: string = ``, data = {}): Promise<any> {
      return fetch(url)
      .then(response => response.json());
  }
type mockXHROptions = {
  timeout?: number;
  withCredentials?: boolean;
}

type CacheParams = {
  url: string;
  type: string;
}

type LangTypes = 'en' | 'ch' | 'tw' | 'jp' | 'kr';

type RegionType = 'en' | 'ch' | 'tw';

interface CancelMock {
  (): void;
}

interface mockXHR {
  (options?: mockXHROptions): CancelMock;
}

interface mockRequest {
  (method: string, url: string, data: unknown): void;
}

interface findCache {
  (options: CacheParams): unknown | false;
}

interface setCache {
  (options: CacheParams, data: unknown): void;
}

interface getCache {
  (options: CacheParams): unknown | false;
}

interface deleteCache {
  (options: CacheParams): void;
}

interface clearCache {
  (): void;
}

interface mock {
  (dataSchema: unknown): unknown;
}

interface Random {
  boolean(): boolean;
  natural(min?: number, max?: number): number;
  integer(min?: number, max?: number): number;
  character(pool: string[] | string): string;
  float(min: number, max: number, dmin?: number, dmax?: number): number;
  string(): string;
  string(poolMax: string[] | string | number): string;
  string(poolMin: string[] | string | number, minMax: number): string;
  string(pool: string[] | string, min: number, max: number): string;
  date(format?: string, min?: Date, max?: Date): string;
  time(format?: string, min?: Date, max?: Date): string;
  datetime(format?: string, min?: Date, max?: Date): string;
  now(unit?: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second', format?: string): string;
  pngimage(size?: string, background?: string, foreground?: string, text?: string): string;
  jpgimage(size?: string, background?: string, foreground?: string, text?: string): string;
  gifimage(size?: string, background?: string, foreground?: string, text?: string): string;
  image(size?: string, background?: string, foreground?: string, format?: string, text?: string): string;
  color(): string;
  hex(): string;
  rgb(): string;
  rgba(): string;
  hsl(): string;
  hsv(): string;
  word(pool?: string | string[] | number, min?: number, max?: number): string;
  sentence(pool?: string | string[] | number, min?: number, max?: number): string;
  paragraph(pool?: string | string[] | number, min?: number, max?: number): string;
  title(pool?: string | string[] | number, min?: number, max?: number): string;
  first(lang?: LangTypes): string;
  last(lang?: LangTypes): string;
  name(lang?: LangTypes): string;
  domain(ctld?: string): string;
  protocol(): 'http' | 'https' | 'ftp' | 'gopher' | 'mailto' | 'mid' | 'cid' | 'news'| 'nntp'| 'prospero'| 'telnet'| 'rlogin'| 'tn3270'| 'wais';
  url(protoc?: string, host?: string): string;
  email(cdomain?: string, pool?: string[] | string | number, min?: number, max?: number): string;
  ip(): string;
  region(type?: RegionType): string;
  province(type?: RegionType): string;
  city(type?: RegionType, prefix?: boolean): string;
  county(type?: RegionType, prefix?: boolean): string;
  zip(len: number): string;
  guid(): string;
  id(type?: RegionType): string;
  increment(): () => number;
}


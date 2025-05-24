/**
 * Mehasoft Request - Type Declarations
 */

export interface RequestOptions {
  endpoint: string;
  body?: object | FormData | null;
  bearerToken?: string | null;
  csrfToken?: string | null;
  customUrl?: string | null;
}

export interface GetOptions {
  endpoint: string;
  bearerToken?: string | null;
}

export declare function get(options: GetOptions): Promise<any>;
export declare function post(options: RequestOptions): Promise<any>;
export declare function put(options: RequestOptions): Promise<any>;
export declare function patch(options: RequestOptions): Promise<any>;
export declare function del(options: RequestOptions): Promise<any>;
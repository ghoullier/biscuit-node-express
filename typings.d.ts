import type {
  Authorizer,
  Check,
  Fact,
  Policy,
  Rule,
} from '@biscuit-auth/biscuit-wasm';
import type { Request, RequestHandler } from 'express';
import type { ParamsDictionary, Query } from 'express-serve-static-core';

export interface ExpressBiscuitOptions<
  Params = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query,
> {
  publicKey: string;
  policies?: string;
  extractor?: (
    req: Request<Params, ResBody, ReqBody, ReqQuery>,
    authorizer: Authorizer,
  ) => void;
}

export function check(strings: TemplateStringsArray, ...keys: string[]): Check;

export function fact(strings: TemplateStringsArray, ...keys: string[]): Fact;

export function policy(
  strings: TemplateStringsArray,
  ...keys: string[]
): Policy;

export function rule(strings: TemplateStringsArray, ...keys: string[]): Rule;

export default function <
  Params = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query,
>(
  options: ExpressBiscuitOptions<Params, ResBody, ReqBody, ReqQuery>,
): RequestHandler;

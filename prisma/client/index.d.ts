
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model accident
 * 
 */
export type accident = {
  id: number
  deadyearBudha: number | null
  deadyear: number | null
  age: number | null
  sex: number | null
  deadDate: Date | null
  province: string | null
  latitude: number | null
  longitude: number | null
  icd10: string | null
  vehicle: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accidents
 * const accidents = await prisma.accident.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accidents
   * const accidents = await prisma.accident.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.accident`: Exposes CRUD operations for the **accident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accidents
    * const accidents = await prisma.accident.findMany()
    * ```
    */
  get accident(): Prisma.accidentDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    accident: 'accident'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model accident
   */


  export type AggregateAccident = {
    _count: AccidentCountAggregateOutputType | null
    _avg: AccidentAvgAggregateOutputType | null
    _sum: AccidentSumAggregateOutputType | null
    _min: AccidentMinAggregateOutputType | null
    _max: AccidentMaxAggregateOutputType | null
  }

  export type AccidentAvgAggregateOutputType = {
    id: number | null
    deadyearBudha: number | null
    deadyear: number | null
    age: number | null
    sex: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AccidentSumAggregateOutputType = {
    id: number | null
    deadyearBudha: number | null
    deadyear: number | null
    age: number | null
    sex: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AccidentMinAggregateOutputType = {
    id: number | null
    deadyearBudha: number | null
    deadyear: number | null
    age: number | null
    sex: number | null
    deadDate: Date | null
    province: string | null
    latitude: number | null
    longitude: number | null
    icd10: string | null
    vehicle: string | null
  }

  export type AccidentMaxAggregateOutputType = {
    id: number | null
    deadyearBudha: number | null
    deadyear: number | null
    age: number | null
    sex: number | null
    deadDate: Date | null
    province: string | null
    latitude: number | null
    longitude: number | null
    icd10: string | null
    vehicle: string | null
  }

  export type AccidentCountAggregateOutputType = {
    id: number
    deadyearBudha: number
    deadyear: number
    age: number
    sex: number
    deadDate: number
    province: number
    latitude: number
    longitude: number
    icd10: number
    vehicle: number
    _all: number
  }


  export type AccidentAvgAggregateInputType = {
    id?: true
    deadyearBudha?: true
    deadyear?: true
    age?: true
    sex?: true
    latitude?: true
    longitude?: true
  }

  export type AccidentSumAggregateInputType = {
    id?: true
    deadyearBudha?: true
    deadyear?: true
    age?: true
    sex?: true
    latitude?: true
    longitude?: true
  }

  export type AccidentMinAggregateInputType = {
    id?: true
    deadyearBudha?: true
    deadyear?: true
    age?: true
    sex?: true
    deadDate?: true
    province?: true
    latitude?: true
    longitude?: true
    icd10?: true
    vehicle?: true
  }

  export type AccidentMaxAggregateInputType = {
    id?: true
    deadyearBudha?: true
    deadyear?: true
    age?: true
    sex?: true
    deadDate?: true
    province?: true
    latitude?: true
    longitude?: true
    icd10?: true
    vehicle?: true
  }

  export type AccidentCountAggregateInputType = {
    id?: true
    deadyearBudha?: true
    deadyear?: true
    age?: true
    sex?: true
    deadDate?: true
    province?: true
    latitude?: true
    longitude?: true
    icd10?: true
    vehicle?: true
    _all?: true
  }

  export type AccidentAggregateArgs = {
    /**
     * Filter which accident to aggregate.
     */
    where?: accidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accidents to fetch.
     */
    orderBy?: Enumerable<accidentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accidents
    **/
    _count?: true | AccidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccidentMaxAggregateInputType
  }

  export type GetAccidentAggregateType<T extends AccidentAggregateArgs> = {
        [P in keyof T & keyof AggregateAccident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccident[P]>
      : GetScalarType<T[P], AggregateAccident[P]>
  }




  export type AccidentGroupByArgs = {
    where?: accidentWhereInput
    orderBy?: Enumerable<accidentOrderByWithAggregationInput>
    by: AccidentScalarFieldEnum[]
    having?: accidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccidentCountAggregateInputType | true
    _avg?: AccidentAvgAggregateInputType
    _sum?: AccidentSumAggregateInputType
    _min?: AccidentMinAggregateInputType
    _max?: AccidentMaxAggregateInputType
  }


  export type AccidentGroupByOutputType = {
    id: number
    deadyearBudha: number | null
    deadyear: number | null
    age: number | null
    sex: number | null
    deadDate: Date | null
    province: string | null
    latitude: number | null
    longitude: number | null
    icd10: string | null
    vehicle: string | null
    _count: AccidentCountAggregateOutputType | null
    _avg: AccidentAvgAggregateOutputType | null
    _sum: AccidentSumAggregateOutputType | null
    _min: AccidentMinAggregateOutputType | null
    _max: AccidentMaxAggregateOutputType | null
  }

  type GetAccidentGroupByPayload<T extends AccidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccidentGroupByOutputType[P]>
            : GetScalarType<T[P], AccidentGroupByOutputType[P]>
        }
      >
    >


  export type accidentSelect = {
    id?: boolean
    deadyearBudha?: boolean
    deadyear?: boolean
    age?: boolean
    sex?: boolean
    deadDate?: boolean
    province?: boolean
    latitude?: boolean
    longitude?: boolean
    icd10?: boolean
    vehicle?: boolean
  }


  export type accidentGetPayload<S extends boolean | null | undefined | accidentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? accident :
    S extends undefined ? never :
    S extends { include: any } & (accidentArgs | accidentFindManyArgs)
    ? accident 
    : S extends { select: any } & (accidentArgs | accidentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof accident ? accident[P] : never
  } 
      : accident


  type accidentCountArgs = 
    Omit<accidentFindManyArgs, 'select' | 'include'> & {
      select?: AccidentCountAggregateInputType | true
    }

  export interface accidentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Accident that matches the filter.
     * @param {accidentFindUniqueArgs} args - Arguments to find a Accident
     * @example
     * // Get one Accident
     * const accident = await prisma.accident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends accidentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, accidentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'accident'> extends True ? Prisma__accidentClient<accidentGetPayload<T>> : Prisma__accidentClient<accidentGetPayload<T> | null, null>

    /**
     * Find one Accident that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {accidentFindUniqueOrThrowArgs} args - Arguments to find a Accident
     * @example
     * // Get one Accident
     * const accident = await prisma.accident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends accidentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, accidentFindUniqueOrThrowArgs>
    ): Prisma__accidentClient<accidentGetPayload<T>>

    /**
     * Find the first Accident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentFindFirstArgs} args - Arguments to find a Accident
     * @example
     * // Get one Accident
     * const accident = await prisma.accident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends accidentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, accidentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'accident'> extends True ? Prisma__accidentClient<accidentGetPayload<T>> : Prisma__accidentClient<accidentGetPayload<T> | null, null>

    /**
     * Find the first Accident that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentFindFirstOrThrowArgs} args - Arguments to find a Accident
     * @example
     * // Get one Accident
     * const accident = await prisma.accident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends accidentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, accidentFindFirstOrThrowArgs>
    ): Prisma__accidentClient<accidentGetPayload<T>>

    /**
     * Find zero or more Accidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accidents
     * const accidents = await prisma.accident.findMany()
     * 
     * // Get first 10 Accidents
     * const accidents = await prisma.accident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accidentWithIdOnly = await prisma.accident.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends accidentFindManyArgs>(
      args?: SelectSubset<T, accidentFindManyArgs>
    ): Prisma.PrismaPromise<Array<accidentGetPayload<T>>>

    /**
     * Create a Accident.
     * @param {accidentCreateArgs} args - Arguments to create a Accident.
     * @example
     * // Create one Accident
     * const Accident = await prisma.accident.create({
     *   data: {
     *     // ... data to create a Accident
     *   }
     * })
     * 
    **/
    create<T extends accidentCreateArgs>(
      args: SelectSubset<T, accidentCreateArgs>
    ): Prisma__accidentClient<accidentGetPayload<T>>

    /**
     * Create many Accidents.
     *     @param {accidentCreateManyArgs} args - Arguments to create many Accidents.
     *     @example
     *     // Create many Accidents
     *     const accident = await prisma.accident.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends accidentCreateManyArgs>(
      args?: SelectSubset<T, accidentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accident.
     * @param {accidentDeleteArgs} args - Arguments to delete one Accident.
     * @example
     * // Delete one Accident
     * const Accident = await prisma.accident.delete({
     *   where: {
     *     // ... filter to delete one Accident
     *   }
     * })
     * 
    **/
    delete<T extends accidentDeleteArgs>(
      args: SelectSubset<T, accidentDeleteArgs>
    ): Prisma__accidentClient<accidentGetPayload<T>>

    /**
     * Update one Accident.
     * @param {accidentUpdateArgs} args - Arguments to update one Accident.
     * @example
     * // Update one Accident
     * const accident = await prisma.accident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends accidentUpdateArgs>(
      args: SelectSubset<T, accidentUpdateArgs>
    ): Prisma__accidentClient<accidentGetPayload<T>>

    /**
     * Delete zero or more Accidents.
     * @param {accidentDeleteManyArgs} args - Arguments to filter Accidents to delete.
     * @example
     * // Delete a few Accidents
     * const { count } = await prisma.accident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends accidentDeleteManyArgs>(
      args?: SelectSubset<T, accidentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accidents
     * const accident = await prisma.accident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends accidentUpdateManyArgs>(
      args: SelectSubset<T, accidentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accident.
     * @param {accidentUpsertArgs} args - Arguments to update or create a Accident.
     * @example
     * // Update or create a Accident
     * const accident = await prisma.accident.upsert({
     *   create: {
     *     // ... data to create a Accident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accident we want to update
     *   }
     * })
    **/
    upsert<T extends accidentUpsertArgs>(
      args: SelectSubset<T, accidentUpsertArgs>
    ): Prisma__accidentClient<accidentGetPayload<T>>

    /**
     * Count the number of Accidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentCountArgs} args - Arguments to filter Accidents to count.
     * @example
     * // Count the number of Accidents
     * const count = await prisma.accident.count({
     *   where: {
     *     // ... the filter for the Accidents we want to count
     *   }
     * })
    **/
    count<T extends accidentCountArgs>(
      args?: Subset<T, accidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccidentAggregateArgs>(args: Subset<T, AccidentAggregateArgs>): Prisma.PrismaPromise<GetAccidentAggregateType<T>>

    /**
     * Group by Accident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccidentGroupByArgs['orderBy'] }
        : { orderBy?: AccidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for accident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__accidentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * accident base type for findUnique actions
   */
  export type accidentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the accident
     */
    select?: accidentSelect | null
    /**
     * Filter, which accident to fetch.
     */
    where: accidentWhereUniqueInput
  }

  /**
   * accident findUnique
   */
  export interface accidentFindUniqueArgs extends accidentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * accident findUniqueOrThrow
   */
  export type accidentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the accident
     */
    select?: accidentSelect | null
    /**
     * Filter, which accident to fetch.
     */
    where: accidentWhereUniqueInput
  }


  /**
   * accident base type for findFirst actions
   */
  export type accidentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the accident
     */
    select?: accidentSelect | null
    /**
     * Filter, which accident to fetch.
     */
    where?: accidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accidents to fetch.
     */
    orderBy?: Enumerable<accidentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accidents.
     */
    cursor?: accidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accidents.
     */
    distinct?: Enumerable<AccidentScalarFieldEnum>
  }

  /**
   * accident findFirst
   */
  export interface accidentFindFirstArgs extends accidentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * accident findFirstOrThrow
   */
  export type accidentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the accident
     */
    select?: accidentSelect | null
    /**
     * Filter, which accident to fetch.
     */
    where?: accidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accidents to fetch.
     */
    orderBy?: Enumerable<accidentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accidents.
     */
    cursor?: accidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accidents.
     */
    distinct?: Enumerable<AccidentScalarFieldEnum>
  }


  /**
   * accident findMany
   */
  export type accidentFindManyArgs = {
    /**
     * Select specific fields to fetch from the accident
     */
    select?: accidentSelect | null
    /**
     * Filter, which accidents to fetch.
     */
    where?: accidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accidents to fetch.
     */
    orderBy?: Enumerable<accidentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accidents.
     */
    cursor?: accidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accidents.
     */
    skip?: number
    distinct?: Enumerable<AccidentScalarFieldEnum>
  }


  /**
   * accident create
   */
  export type accidentCreateArgs = {
    /**
     * Select specific fields to fetch from the accident
     */
    select?: accidentSelect | null
    /**
     * The data needed to create a accident.
     */
    data: XOR<accidentCreateInput, accidentUncheckedCreateInput>
  }


  /**
   * accident createMany
   */
  export type accidentCreateManyArgs = {
    /**
     * The data used to create many accidents.
     */
    data: Enumerable<accidentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * accident update
   */
  export type accidentUpdateArgs = {
    /**
     * Select specific fields to fetch from the accident
     */
    select?: accidentSelect | null
    /**
     * The data needed to update a accident.
     */
    data: XOR<accidentUpdateInput, accidentUncheckedUpdateInput>
    /**
     * Choose, which accident to update.
     */
    where: accidentWhereUniqueInput
  }


  /**
   * accident updateMany
   */
  export type accidentUpdateManyArgs = {
    /**
     * The data used to update accidents.
     */
    data: XOR<accidentUpdateManyMutationInput, accidentUncheckedUpdateManyInput>
    /**
     * Filter which accidents to update
     */
    where?: accidentWhereInput
  }


  /**
   * accident upsert
   */
  export type accidentUpsertArgs = {
    /**
     * Select specific fields to fetch from the accident
     */
    select?: accidentSelect | null
    /**
     * The filter to search for the accident to update in case it exists.
     */
    where: accidentWhereUniqueInput
    /**
     * In case the accident found by the `where` argument doesn't exist, create a new accident with this data.
     */
    create: XOR<accidentCreateInput, accidentUncheckedCreateInput>
    /**
     * In case the accident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accidentUpdateInput, accidentUncheckedUpdateInput>
  }


  /**
   * accident delete
   */
  export type accidentDeleteArgs = {
    /**
     * Select specific fields to fetch from the accident
     */
    select?: accidentSelect | null
    /**
     * Filter which accident to delete.
     */
    where: accidentWhereUniqueInput
  }


  /**
   * accident deleteMany
   */
  export type accidentDeleteManyArgs = {
    /**
     * Filter which accidents to delete
     */
    where?: accidentWhereInput
  }


  /**
   * accident without action
   */
  export type accidentArgs = {
    /**
     * Select specific fields to fetch from the accident
     */
    select?: accidentSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccidentScalarFieldEnum: {
    id: 'id',
    deadyearBudha: 'deadyearBudha',
    deadyear: 'deadyear',
    age: 'age',
    sex: 'sex',
    deadDate: 'deadDate',
    province: 'province',
    latitude: 'latitude',
    longitude: 'longitude',
    icd10: 'icd10',
    vehicle: 'vehicle'
  };

  export type AccidentScalarFieldEnum = (typeof AccidentScalarFieldEnum)[keyof typeof AccidentScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type accidentWhereInput = {
    AND?: Enumerable<accidentWhereInput>
    OR?: Enumerable<accidentWhereInput>
    NOT?: Enumerable<accidentWhereInput>
    id?: IntFilter | number
    deadyearBudha?: IntNullableFilter | number | null
    deadyear?: IntNullableFilter | number | null
    age?: IntNullableFilter | number | null
    sex?: IntNullableFilter | number | null
    deadDate?: DateTimeNullableFilter | Date | string | null
    province?: StringNullableFilter | string | null
    latitude?: FloatNullableFilter | number | null
    longitude?: FloatNullableFilter | number | null
    icd10?: StringNullableFilter | string | null
    vehicle?: StringNullableFilter | string | null
  }

  export type accidentOrderByWithRelationInput = {
    id?: SortOrder
    deadyearBudha?: SortOrder
    deadyear?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    deadDate?: SortOrder
    province?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    icd10?: SortOrder
    vehicle?: SortOrder
  }

  export type accidentWhereUniqueInput = {
    id?: number
  }

  export type accidentOrderByWithAggregationInput = {
    id?: SortOrder
    deadyearBudha?: SortOrder
    deadyear?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    deadDate?: SortOrder
    province?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    icd10?: SortOrder
    vehicle?: SortOrder
    _count?: accidentCountOrderByAggregateInput
    _avg?: accidentAvgOrderByAggregateInput
    _max?: accidentMaxOrderByAggregateInput
    _min?: accidentMinOrderByAggregateInput
    _sum?: accidentSumOrderByAggregateInput
  }

  export type accidentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<accidentScalarWhereWithAggregatesInput>
    OR?: Enumerable<accidentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<accidentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    deadyearBudha?: IntNullableWithAggregatesFilter | number | null
    deadyear?: IntNullableWithAggregatesFilter | number | null
    age?: IntNullableWithAggregatesFilter | number | null
    sex?: IntNullableWithAggregatesFilter | number | null
    deadDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    province?: StringNullableWithAggregatesFilter | string | null
    latitude?: FloatNullableWithAggregatesFilter | number | null
    longitude?: FloatNullableWithAggregatesFilter | number | null
    icd10?: StringNullableWithAggregatesFilter | string | null
    vehicle?: StringNullableWithAggregatesFilter | string | null
  }

  export type accidentCreateInput = {
    id: number
    deadyearBudha?: number | null
    deadyear?: number | null
    age?: number | null
    sex?: number | null
    deadDate?: Date | string | null
    province?: string | null
    latitude?: number | null
    longitude?: number | null
    icd10?: string | null
    vehicle?: string | null
  }

  export type accidentUncheckedCreateInput = {
    id: number
    deadyearBudha?: number | null
    deadyear?: number | null
    age?: number | null
    sex?: number | null
    deadDate?: Date | string | null
    province?: string | null
    latitude?: number | null
    longitude?: number | null
    icd10?: string | null
    vehicle?: string | null
  }

  export type accidentUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deadyearBudha?: NullableIntFieldUpdateOperationsInput | number | null
    deadyear?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableIntFieldUpdateOperationsInput | number | null
    deadDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    icd10?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accidentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deadyearBudha?: NullableIntFieldUpdateOperationsInput | number | null
    deadyear?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableIntFieldUpdateOperationsInput | number | null
    deadDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    icd10?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accidentCreateManyInput = {
    id: number
    deadyearBudha?: number | null
    deadyear?: number | null
    age?: number | null
    sex?: number | null
    deadDate?: Date | string | null
    province?: string | null
    latitude?: number | null
    longitude?: number | null
    icd10?: string | null
    vehicle?: string | null
  }

  export type accidentUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    deadyearBudha?: NullableIntFieldUpdateOperationsInput | number | null
    deadyear?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableIntFieldUpdateOperationsInput | number | null
    deadDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    icd10?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accidentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deadyearBudha?: NullableIntFieldUpdateOperationsInput | number | null
    deadyear?: NullableIntFieldUpdateOperationsInput | number | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableIntFieldUpdateOperationsInput | number | null
    deadDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    icd10?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type accidentCountOrderByAggregateInput = {
    id?: SortOrder
    deadyearBudha?: SortOrder
    deadyear?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    deadDate?: SortOrder
    province?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    icd10?: SortOrder
    vehicle?: SortOrder
  }

  export type accidentAvgOrderByAggregateInput = {
    id?: SortOrder
    deadyearBudha?: SortOrder
    deadyear?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type accidentMaxOrderByAggregateInput = {
    id?: SortOrder
    deadyearBudha?: SortOrder
    deadyear?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    deadDate?: SortOrder
    province?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    icd10?: SortOrder
    vehicle?: SortOrder
  }

  export type accidentMinOrderByAggregateInput = {
    id?: SortOrder
    deadyearBudha?: SortOrder
    deadyear?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    deadDate?: SortOrder
    province?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    icd10?: SortOrder
    vehicle?: SortOrder
  }

  export type accidentSumOrderByAggregateInput = {
    id?: SortOrder
    deadyearBudha?: SortOrder
    deadyear?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
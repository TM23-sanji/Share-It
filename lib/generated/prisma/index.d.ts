
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Dislike
 * 
 */
export type Dislike = $Result.DefaultSelection<Prisma.$DislikePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model FriendRequest
 * 
 */
export type FriendRequest = $Result.DefaultSelection<Prisma.$FriendRequestPayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dislike`: Exposes CRUD operations for the **Dislike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dislikes
    * const dislikes = await prisma.dislike.findMany()
    * ```
    */
  get dislike(): Prisma.DislikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendRequest`: Exposes CRUD operations for the **FriendRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendRequests
    * const friendRequests = await prisma.friendRequest.findMany()
    * ```
    */
  get friendRequest(): Prisma.FriendRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Image: 'Image',
    Like: 'Like',
    Dislike: 'Dislike',
    Comment: 'Comment',
    Favorite: 'Favorite',
    FriendRequest: 'FriendRequest',
    Friendship: 'Friendship'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "image" | "like" | "dislike" | "comment" | "favorite" | "friendRequest" | "friendship"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Dislike: {
        payload: Prisma.$DislikePayload<ExtArgs>
        fields: Prisma.DislikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DislikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DislikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          findFirst: {
            args: Prisma.DislikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DislikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          findMany: {
            args: Prisma.DislikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>[]
          }
          create: {
            args: Prisma.DislikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          createMany: {
            args: Prisma.DislikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DislikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>[]
          }
          delete: {
            args: Prisma.DislikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          update: {
            args: Prisma.DislikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          deleteMany: {
            args: Prisma.DislikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DislikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DislikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>[]
          }
          upsert: {
            args: Prisma.DislikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          aggregate: {
            args: Prisma.DislikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDislike>
          }
          groupBy: {
            args: Prisma.DislikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DislikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DislikeCountArgs<ExtArgs>
            result: $Utils.Optional<DislikeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      FriendRequest: {
        payload: Prisma.$FriendRequestPayload<ExtArgs>
        fields: Prisma.FriendRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findFirst: {
            args: Prisma.FriendRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findMany: {
            args: Prisma.FriendRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[]
          }
          create: {
            args: Prisma.FriendRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          createMany: {
            args: Prisma.FriendRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[]
          }
          delete: {
            args: Prisma.FriendRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          update: {
            args: Prisma.FriendRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          deleteMany: {
            args: Prisma.FriendRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[]
          }
          upsert: {
            args: Prisma.FriendRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          aggregate: {
            args: Prisma.FriendRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendRequest>
          }
          groupBy: {
            args: Prisma.FriendRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendRequestCountArgs<ExtArgs>
            result: $Utils.Optional<FriendRequestCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    image?: ImageOmit
    like?: LikeOmit
    dislike?: DislikeOmit
    comment?: CommentOmit
    favorite?: FavoriteOmit
    friendRequest?: FriendRequestOmit
    friendship?: FriendshipOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentRequests: number
    receivedRequests: number
    friendsAsUser1: number
    friendsAsUser2: number
    images: number
    comments: number
    favorites: number
    likes: number
    dislikes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentRequests?: boolean | UserCountOutputTypeCountSentRequestsArgs
    receivedRequests?: boolean | UserCountOutputTypeCountReceivedRequestsArgs
    friendsAsUser1?: boolean | UserCountOutputTypeCountFriendsAsUser1Args
    friendsAsUser2?: boolean | UserCountOutputTypeCountFriendsAsUser2Args
    images?: boolean | UserCountOutputTypeCountImagesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    dislikes?: boolean | UserCountOutputTypeCountDislikesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDislikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DislikeWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    likedBy: number
    dislikedBy: number
    comments: number
    favorites: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedBy?: boolean | ImageCountOutputTypeCountLikedByArgs
    dislikedBy?: boolean | ImageCountOutputTypeCountDislikedByArgs
    comments?: boolean | ImageCountOutputTypeCountCommentsArgs
    favorites?: boolean | ImageCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountDislikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DislikeWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    friendsAsUser1?: boolean | User$friendsAsUser1Args<ExtArgs>
    friendsAsUser2?: boolean | User$friendsAsUser2Args<ExtArgs>
    images?: boolean | User$imagesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    dislikes?: boolean | User$dislikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    friendsAsUser1?: boolean | User$friendsAsUser1Args<ExtArgs>
    friendsAsUser2?: boolean | User$friendsAsUser2Args<ExtArgs>
    images?: boolean | User$imagesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    dislikes?: boolean | User$dislikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentRequests: Prisma.$FriendRequestPayload<ExtArgs>[]
      receivedRequests: Prisma.$FriendRequestPayload<ExtArgs>[]
      friendsAsUser1: Prisma.$FriendshipPayload<ExtArgs>[]
      friendsAsUser2: Prisma.$FriendshipPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      dislikes: Prisma.$DislikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentRequests<T extends User$sentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRequests<T extends User$receivedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendsAsUser1<T extends User$friendsAsUser1Args<ExtArgs> = {}>(args?: Subset<T, User$friendsAsUser1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendsAsUser2<T extends User$friendsAsUser2Args<ExtArgs> = {}>(args?: Subset<T, User$friendsAsUser2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends User$imagesArgs<ExtArgs> = {}>(args?: Subset<T, User$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dislikes<T extends User$dislikesArgs<ExtArgs> = {}>(args?: Subset<T, User$dislikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sentRequests
   */
  export type User$sentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    cursor?: FriendRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * User.receivedRequests
   */
  export type User$receivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    cursor?: FriendRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * User.friendsAsUser1
   */
  export type User$friendsAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.friendsAsUser2
   */
  export type User$friendsAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.images
   */
  export type User$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.dislikes
   */
  export type User$dislikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    where?: DislikeWhereInput
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    cursor?: DislikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DislikeScalarFieldEnum | DislikeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    fileWidth: number | null
    fileHeight: number | null
    likes: number | null
    dislikes: number | null
  }

  export type ImageSumAggregateOutputType = {
    fileWidth: number | null
    fileHeight: number | null
    likes: number | null
    dislikes: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    fileId: string | null
    fileWidth: number | null
    fileHeight: number | null
    uploadedById: string | null
    likes: number | null
    dislikes: number | null
    createdAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    fileId: string | null
    fileWidth: number | null
    fileHeight: number | null
    uploadedById: string | null
    likes: number | null
    dislikes: number | null
    createdAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    alt: number
    fileId: number
    fileWidth: number
    fileHeight: number
    uploadedById: number
    likes: number
    dislikes: number
    createdAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    fileWidth?: true
    fileHeight?: true
    likes?: true
    dislikes?: true
  }

  export type ImageSumAggregateInputType = {
    fileWidth?: true
    fileHeight?: true
    likes?: true
    dislikes?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    fileId?: true
    fileWidth?: true
    fileHeight?: true
    uploadedById?: true
    likes?: true
    dislikes?: true
    createdAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    fileId?: true
    fileWidth?: true
    fileHeight?: true
    uploadedById?: true
    likes?: true
    dislikes?: true
    createdAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    fileId?: true
    fileWidth?: true
    fileHeight?: true
    uploadedById?: true
    likes?: true
    dislikes?: true
    createdAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    alt: string | null
    fileId: string
    fileWidth: number | null
    fileHeight: number | null
    uploadedById: string
    likes: number
    dislikes: number
    createdAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    fileId?: boolean
    fileWidth?: boolean
    fileHeight?: boolean
    uploadedById?: boolean
    likes?: boolean
    dislikes?: boolean
    createdAt?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    likedBy?: boolean | Image$likedByArgs<ExtArgs>
    dislikedBy?: boolean | Image$dislikedByArgs<ExtArgs>
    comments?: boolean | Image$commentsArgs<ExtArgs>
    favorites?: boolean | Image$favoritesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    fileId?: boolean
    fileWidth?: boolean
    fileHeight?: boolean
    uploadedById?: boolean
    likes?: boolean
    dislikes?: boolean
    createdAt?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    fileId?: boolean
    fileWidth?: boolean
    fileHeight?: boolean
    uploadedById?: boolean
    likes?: boolean
    dislikes?: boolean
    createdAt?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    alt?: boolean
    fileId?: boolean
    fileWidth?: boolean
    fileHeight?: boolean
    uploadedById?: boolean
    likes?: boolean
    dislikes?: boolean
    createdAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "alt" | "fileId" | "fileWidth" | "fileHeight" | "uploadedById" | "likes" | "dislikes" | "createdAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    likedBy?: boolean | Image$likedByArgs<ExtArgs>
    dislikedBy?: boolean | Image$dislikedByArgs<ExtArgs>
    comments?: boolean | Image$commentsArgs<ExtArgs>
    favorites?: boolean | Image$favoritesArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      uploadedBy: Prisma.$UserPayload<ExtArgs>
      likedBy: Prisma.$LikePayload<ExtArgs>[]
      dislikedBy: Prisma.$DislikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      alt: string | null
      fileId: string
      fileWidth: number | null
      fileHeight: number | null
      uploadedById: string
      likes: number
      dislikes: number
      createdAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likedBy<T extends Image$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Image$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dislikedBy<T extends Image$dislikedByArgs<ExtArgs> = {}>(args?: Subset<T, Image$dislikedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Image$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Image$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Image$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Image$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly alt: FieldRef<"Image", 'String'>
    readonly fileId: FieldRef<"Image", 'String'>
    readonly fileWidth: FieldRef<"Image", 'Int'>
    readonly fileHeight: FieldRef<"Image", 'Int'>
    readonly uploadedById: FieldRef<"Image", 'String'>
    readonly likes: FieldRef<"Image", 'Int'>
    readonly dislikes: FieldRef<"Image", 'Int'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.likedBy
   */
  export type Image$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Image.dislikedBy
   */
  export type Image$dislikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    where?: DislikeWhereInput
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    cursor?: DislikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DislikeScalarFieldEnum | DislikeScalarFieldEnum[]
  }

  /**
   * Image.comments
   */
  export type Image$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Image.favorites
   */
  export type Image$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    imageId: string | null
    createdAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    imageId: string | null
    createdAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    userId: number
    imageId: number
    createdAt: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: string
    userId: string
    imageId: string
    createdAt: Date
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "imageId" | "createdAt", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      imageId: string
      createdAt: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'String'>
    readonly userId: FieldRef<"Like", 'String'>
    readonly imageId: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Dislike
   */

  export type AggregateDislike = {
    _count: DislikeCountAggregateOutputType | null
    _min: DislikeMinAggregateOutputType | null
    _max: DislikeMaxAggregateOutputType | null
  }

  export type DislikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    imageId: string | null
    createdAt: Date | null
  }

  export type DislikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    imageId: string | null
    createdAt: Date | null
  }

  export type DislikeCountAggregateOutputType = {
    id: number
    userId: number
    imageId: number
    createdAt: number
    _all: number
  }


  export type DislikeMinAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type DislikeMaxAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type DislikeCountAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
    _all?: true
  }

  export type DislikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dislike to aggregate.
     */
    where?: DislikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dislikes to fetch.
     */
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DislikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dislikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dislikes
    **/
    _count?: true | DislikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DislikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DislikeMaxAggregateInputType
  }

  export type GetDislikeAggregateType<T extends DislikeAggregateArgs> = {
        [P in keyof T & keyof AggregateDislike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDislike[P]>
      : GetScalarType<T[P], AggregateDislike[P]>
  }




  export type DislikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DislikeWhereInput
    orderBy?: DislikeOrderByWithAggregationInput | DislikeOrderByWithAggregationInput[]
    by: DislikeScalarFieldEnum[] | DislikeScalarFieldEnum
    having?: DislikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DislikeCountAggregateInputType | true
    _min?: DislikeMinAggregateInputType
    _max?: DislikeMaxAggregateInputType
  }

  export type DislikeGroupByOutputType = {
    id: string
    userId: string
    imageId: string
    createdAt: Date
    _count: DislikeCountAggregateOutputType | null
    _min: DislikeMinAggregateOutputType | null
    _max: DislikeMaxAggregateOutputType | null
  }

  type GetDislikeGroupByPayload<T extends DislikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DislikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DislikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DislikeGroupByOutputType[P]>
            : GetScalarType<T[P], DislikeGroupByOutputType[P]>
        }
      >
    >


  export type DislikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dislike"]>

  export type DislikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dislike"]>

  export type DislikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dislike"]>

  export type DislikeSelectScalar = {
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
  }

  export type DislikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "imageId" | "createdAt", ExtArgs["result"]["dislike"]>
  export type DislikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type DislikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type DislikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $DislikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dislike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      imageId: string
      createdAt: Date
    }, ExtArgs["result"]["dislike"]>
    composites: {}
  }

  type DislikeGetPayload<S extends boolean | null | undefined | DislikeDefaultArgs> = $Result.GetResult<Prisma.$DislikePayload, S>

  type DislikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DislikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DislikeCountAggregateInputType | true
    }

  export interface DislikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dislike'], meta: { name: 'Dislike' } }
    /**
     * Find zero or one Dislike that matches the filter.
     * @param {DislikeFindUniqueArgs} args - Arguments to find a Dislike
     * @example
     * // Get one Dislike
     * const dislike = await prisma.dislike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DislikeFindUniqueArgs>(args: SelectSubset<T, DislikeFindUniqueArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dislike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DislikeFindUniqueOrThrowArgs} args - Arguments to find a Dislike
     * @example
     * // Get one Dislike
     * const dislike = await prisma.dislike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DislikeFindUniqueOrThrowArgs>(args: SelectSubset<T, DislikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dislike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeFindFirstArgs} args - Arguments to find a Dislike
     * @example
     * // Get one Dislike
     * const dislike = await prisma.dislike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DislikeFindFirstArgs>(args?: SelectSubset<T, DislikeFindFirstArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dislike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeFindFirstOrThrowArgs} args - Arguments to find a Dislike
     * @example
     * // Get one Dislike
     * const dislike = await prisma.dislike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DislikeFindFirstOrThrowArgs>(args?: SelectSubset<T, DislikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dislikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dislikes
     * const dislikes = await prisma.dislike.findMany()
     * 
     * // Get first 10 Dislikes
     * const dislikes = await prisma.dislike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dislikeWithIdOnly = await prisma.dislike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DislikeFindManyArgs>(args?: SelectSubset<T, DislikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dislike.
     * @param {DislikeCreateArgs} args - Arguments to create a Dislike.
     * @example
     * // Create one Dislike
     * const Dislike = await prisma.dislike.create({
     *   data: {
     *     // ... data to create a Dislike
     *   }
     * })
     * 
     */
    create<T extends DislikeCreateArgs>(args: SelectSubset<T, DislikeCreateArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dislikes.
     * @param {DislikeCreateManyArgs} args - Arguments to create many Dislikes.
     * @example
     * // Create many Dislikes
     * const dislike = await prisma.dislike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DislikeCreateManyArgs>(args?: SelectSubset<T, DislikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dislikes and returns the data saved in the database.
     * @param {DislikeCreateManyAndReturnArgs} args - Arguments to create many Dislikes.
     * @example
     * // Create many Dislikes
     * const dislike = await prisma.dislike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dislikes and only return the `id`
     * const dislikeWithIdOnly = await prisma.dislike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DislikeCreateManyAndReturnArgs>(args?: SelectSubset<T, DislikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dislike.
     * @param {DislikeDeleteArgs} args - Arguments to delete one Dislike.
     * @example
     * // Delete one Dislike
     * const Dislike = await prisma.dislike.delete({
     *   where: {
     *     // ... filter to delete one Dislike
     *   }
     * })
     * 
     */
    delete<T extends DislikeDeleteArgs>(args: SelectSubset<T, DislikeDeleteArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dislike.
     * @param {DislikeUpdateArgs} args - Arguments to update one Dislike.
     * @example
     * // Update one Dislike
     * const dislike = await prisma.dislike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DislikeUpdateArgs>(args: SelectSubset<T, DislikeUpdateArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dislikes.
     * @param {DislikeDeleteManyArgs} args - Arguments to filter Dislikes to delete.
     * @example
     * // Delete a few Dislikes
     * const { count } = await prisma.dislike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DislikeDeleteManyArgs>(args?: SelectSubset<T, DislikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dislikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dislikes
     * const dislike = await prisma.dislike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DislikeUpdateManyArgs>(args: SelectSubset<T, DislikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dislikes and returns the data updated in the database.
     * @param {DislikeUpdateManyAndReturnArgs} args - Arguments to update many Dislikes.
     * @example
     * // Update many Dislikes
     * const dislike = await prisma.dislike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dislikes and only return the `id`
     * const dislikeWithIdOnly = await prisma.dislike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DislikeUpdateManyAndReturnArgs>(args: SelectSubset<T, DislikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dislike.
     * @param {DislikeUpsertArgs} args - Arguments to update or create a Dislike.
     * @example
     * // Update or create a Dislike
     * const dislike = await prisma.dislike.upsert({
     *   create: {
     *     // ... data to create a Dislike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dislike we want to update
     *   }
     * })
     */
    upsert<T extends DislikeUpsertArgs>(args: SelectSubset<T, DislikeUpsertArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dislikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeCountArgs} args - Arguments to filter Dislikes to count.
     * @example
     * // Count the number of Dislikes
     * const count = await prisma.dislike.count({
     *   where: {
     *     // ... the filter for the Dislikes we want to count
     *   }
     * })
    **/
    count<T extends DislikeCountArgs>(
      args?: Subset<T, DislikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DislikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dislike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DislikeAggregateArgs>(args: Subset<T, DislikeAggregateArgs>): Prisma.PrismaPromise<GetDislikeAggregateType<T>>

    /**
     * Group by Dislike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeGroupByArgs} args - Group by arguments.
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
      T extends DislikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DislikeGroupByArgs['orderBy'] }
        : { orderBy?: DislikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DislikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDislikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dislike model
   */
  readonly fields: DislikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dislike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DislikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dislike model
   */
  interface DislikeFieldRefs {
    readonly id: FieldRef<"Dislike", 'String'>
    readonly userId: FieldRef<"Dislike", 'String'>
    readonly imageId: FieldRef<"Dislike", 'String'>
    readonly createdAt: FieldRef<"Dislike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dislike findUnique
   */
  export type DislikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter, which Dislike to fetch.
     */
    where: DislikeWhereUniqueInput
  }

  /**
   * Dislike findUniqueOrThrow
   */
  export type DislikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter, which Dislike to fetch.
     */
    where: DislikeWhereUniqueInput
  }

  /**
   * Dislike findFirst
   */
  export type DislikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter, which Dislike to fetch.
     */
    where?: DislikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dislikes to fetch.
     */
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dislikes.
     */
    cursor?: DislikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dislikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dislikes.
     */
    distinct?: DislikeScalarFieldEnum | DislikeScalarFieldEnum[]
  }

  /**
   * Dislike findFirstOrThrow
   */
  export type DislikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter, which Dislike to fetch.
     */
    where?: DislikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dislikes to fetch.
     */
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dislikes.
     */
    cursor?: DislikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dislikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dislikes.
     */
    distinct?: DislikeScalarFieldEnum | DislikeScalarFieldEnum[]
  }

  /**
   * Dislike findMany
   */
  export type DislikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter, which Dislikes to fetch.
     */
    where?: DislikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dislikes to fetch.
     */
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dislikes.
     */
    cursor?: DislikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dislikes.
     */
    skip?: number
    distinct?: DislikeScalarFieldEnum | DislikeScalarFieldEnum[]
  }

  /**
   * Dislike create
   */
  export type DislikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Dislike.
     */
    data: XOR<DislikeCreateInput, DislikeUncheckedCreateInput>
  }

  /**
   * Dislike createMany
   */
  export type DislikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dislikes.
     */
    data: DislikeCreateManyInput | DislikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dislike createManyAndReturn
   */
  export type DislikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * The data used to create many Dislikes.
     */
    data: DislikeCreateManyInput | DislikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dislike update
   */
  export type DislikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Dislike.
     */
    data: XOR<DislikeUpdateInput, DislikeUncheckedUpdateInput>
    /**
     * Choose, which Dislike to update.
     */
    where: DislikeWhereUniqueInput
  }

  /**
   * Dislike updateMany
   */
  export type DislikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dislikes.
     */
    data: XOR<DislikeUpdateManyMutationInput, DislikeUncheckedUpdateManyInput>
    /**
     * Filter which Dislikes to update
     */
    where?: DislikeWhereInput
    /**
     * Limit how many Dislikes to update.
     */
    limit?: number
  }

  /**
   * Dislike updateManyAndReturn
   */
  export type DislikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * The data used to update Dislikes.
     */
    data: XOR<DislikeUpdateManyMutationInput, DislikeUncheckedUpdateManyInput>
    /**
     * Filter which Dislikes to update
     */
    where?: DislikeWhereInput
    /**
     * Limit how many Dislikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dislike upsert
   */
  export type DislikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Dislike to update in case it exists.
     */
    where: DislikeWhereUniqueInput
    /**
     * In case the Dislike found by the `where` argument doesn't exist, create a new Dislike with this data.
     */
    create: XOR<DislikeCreateInput, DislikeUncheckedCreateInput>
    /**
     * In case the Dislike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DislikeUpdateInput, DislikeUncheckedUpdateInput>
  }

  /**
   * Dislike delete
   */
  export type DislikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter which Dislike to delete.
     */
    where: DislikeWhereUniqueInput
  }

  /**
   * Dislike deleteMany
   */
  export type DislikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dislikes to delete
     */
    where?: DislikeWhereInput
    /**
     * Limit how many Dislikes to delete.
     */
    limit?: number
  }

  /**
   * Dislike without action
   */
  export type DislikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    imageId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    imageId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    imageId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    imageId?: true
    userId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    imageId?: true
    userId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    imageId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    imageId: string
    userId: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    imageId?: boolean
    userId?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    imageId?: boolean
    userId?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    imageId?: boolean
    userId?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    imageId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "imageId" | "userId" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      image: Prisma.$ImagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      imageId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly imageId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    imageId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    imageId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    imageId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    imageId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    imageId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    imageId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "imageId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      imageId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly imageId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model FriendRequest
   */

  export type AggregateFriendRequest = {
    _count: FriendRequestCountAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  export type FriendRequestMinAggregateOutputType = {
    id: string | null
    fromId: string | null
    toId: string | null
    createdAt: Date | null
  }

  export type FriendRequestMaxAggregateOutputType = {
    id: string | null
    fromId: string | null
    toId: string | null
    createdAt: Date | null
  }

  export type FriendRequestCountAggregateOutputType = {
    id: number
    fromId: number
    toId: number
    createdAt: number
    _all: number
  }


  export type FriendRequestMinAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    createdAt?: true
  }

  export type FriendRequestMaxAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    createdAt?: true
  }

  export type FriendRequestCountAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    createdAt?: true
    _all?: true
  }

  export type FriendRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequest to aggregate.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendRequests
    **/
    _count?: true | FriendRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendRequestMaxAggregateInputType
  }

  export type GetFriendRequestAggregateType<T extends FriendRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendRequest[P]>
      : GetScalarType<T[P], AggregateFriendRequest[P]>
  }




  export type FriendRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithAggregationInput | FriendRequestOrderByWithAggregationInput[]
    by: FriendRequestScalarFieldEnum[] | FriendRequestScalarFieldEnum
    having?: FriendRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendRequestCountAggregateInputType | true
    _min?: FriendRequestMinAggregateInputType
    _max?: FriendRequestMaxAggregateInputType
  }

  export type FriendRequestGroupByOutputType = {
    id: string
    fromId: string
    toId: string
    createdAt: Date
    _count: FriendRequestCountAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  type GetFriendRequestGroupByPayload<T extends FriendRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
        }
      >
    >


  export type FriendRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    createdAt?: boolean
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendRequest"]>

  export type FriendRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    createdAt?: boolean
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendRequest"]>

  export type FriendRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    createdAt?: boolean
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendRequest"]>

  export type FriendRequestSelectScalar = {
    id?: boolean
    fromId?: boolean
    toId?: boolean
    createdAt?: boolean
  }

  export type FriendRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromId" | "toId" | "createdAt", ExtArgs["result"]["friendRequest"]>
  export type FriendRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FriendRequest"
    objects: {
      from: Prisma.$UserPayload<ExtArgs>
      to: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromId: string
      toId: string
      createdAt: Date
    }, ExtArgs["result"]["friendRequest"]>
    composites: {}
  }

  type FriendRequestGetPayload<S extends boolean | null | undefined | FriendRequestDefaultArgs> = $Result.GetResult<Prisma.$FriendRequestPayload, S>

  type FriendRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendRequestCountAggregateInputType | true
    }

  export interface FriendRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FriendRequest'], meta: { name: 'FriendRequest' } }
    /**
     * Find zero or one FriendRequest that matches the filter.
     * @param {FriendRequestFindUniqueArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendRequestFindUniqueArgs>(args: SelectSubset<T, FriendRequestFindUniqueArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FriendRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendRequestFindUniqueOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendRequestFindFirstArgs>(args?: SelectSubset<T, FriendRequestFindFirstArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FriendRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany()
     * 
     * // Get first 10 FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendRequestFindManyArgs>(args?: SelectSubset<T, FriendRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FriendRequest.
     * @param {FriendRequestCreateArgs} args - Arguments to create a FriendRequest.
     * @example
     * // Create one FriendRequest
     * const FriendRequest = await prisma.friendRequest.create({
     *   data: {
     *     // ... data to create a FriendRequest
     *   }
     * })
     * 
     */
    create<T extends FriendRequestCreateArgs>(args: SelectSubset<T, FriendRequestCreateArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FriendRequests.
     * @param {FriendRequestCreateManyArgs} args - Arguments to create many FriendRequests.
     * @example
     * // Create many FriendRequests
     * const friendRequest = await prisma.friendRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendRequestCreateManyArgs>(args?: SelectSubset<T, FriendRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FriendRequests and returns the data saved in the database.
     * @param {FriendRequestCreateManyAndReturnArgs} args - Arguments to create many FriendRequests.
     * @example
     * // Create many FriendRequests
     * const friendRequest = await prisma.friendRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FriendRequests and only return the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FriendRequest.
     * @param {FriendRequestDeleteArgs} args - Arguments to delete one FriendRequest.
     * @example
     * // Delete one FriendRequest
     * const FriendRequest = await prisma.friendRequest.delete({
     *   where: {
     *     // ... filter to delete one FriendRequest
     *   }
     * })
     * 
     */
    delete<T extends FriendRequestDeleteArgs>(args: SelectSubset<T, FriendRequestDeleteArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FriendRequest.
     * @param {FriendRequestUpdateArgs} args - Arguments to update one FriendRequest.
     * @example
     * // Update one FriendRequest
     * const friendRequest = await prisma.friendRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendRequestUpdateArgs>(args: SelectSubset<T, FriendRequestUpdateArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FriendRequests.
     * @param {FriendRequestDeleteManyArgs} args - Arguments to filter FriendRequests to delete.
     * @example
     * // Delete a few FriendRequests
     * const { count } = await prisma.friendRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendRequestDeleteManyArgs>(args?: SelectSubset<T, FriendRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendRequests
     * const friendRequest = await prisma.friendRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendRequestUpdateManyArgs>(args: SelectSubset<T, FriendRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendRequests and returns the data updated in the database.
     * @param {FriendRequestUpdateManyAndReturnArgs} args - Arguments to update many FriendRequests.
     * @example
     * // Update many FriendRequests
     * const friendRequest = await prisma.friendRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FriendRequests and only return the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FriendRequest.
     * @param {FriendRequestUpsertArgs} args - Arguments to update or create a FriendRequest.
     * @example
     * // Update or create a FriendRequest
     * const friendRequest = await prisma.friendRequest.upsert({
     *   create: {
     *     // ... data to create a FriendRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendRequest we want to update
     *   }
     * })
     */
    upsert<T extends FriendRequestUpsertArgs>(args: SelectSubset<T, FriendRequestUpsertArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestCountArgs} args - Arguments to filter FriendRequests to count.
     * @example
     * // Count the number of FriendRequests
     * const count = await prisma.friendRequest.count({
     *   where: {
     *     // ... the filter for the FriendRequests we want to count
     *   }
     * })
    **/
    count<T extends FriendRequestCountArgs>(
      args?: Subset<T, FriendRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendRequestAggregateArgs>(args: Subset<T, FriendRequestAggregateArgs>): Prisma.PrismaPromise<GetFriendRequestAggregateType<T>>

    /**
     * Group by FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestGroupByArgs} args - Group by arguments.
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
      T extends FriendRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendRequestGroupByArgs['orderBy'] }
        : { orderBy?: FriendRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FriendRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FriendRequest model
   */
  readonly fields: FriendRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FriendRequest model
   */
  interface FriendRequestFieldRefs {
    readonly id: FieldRef<"FriendRequest", 'String'>
    readonly fromId: FieldRef<"FriendRequest", 'String'>
    readonly toId: FieldRef<"FriendRequest", 'String'>
    readonly createdAt: FieldRef<"FriendRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FriendRequest findUnique
   */
  export type FriendRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest findUniqueOrThrow
   */
  export type FriendRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest findFirst
   */
  export type FriendRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * FriendRequest findFirstOrThrow
   */
  export type FriendRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * FriendRequest findMany
   */
  export type FriendRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequests to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * FriendRequest create
   */
  export type FriendRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a FriendRequest.
     */
    data: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
  }

  /**
   * FriendRequest createMany
   */
  export type FriendRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FriendRequests.
     */
    data: FriendRequestCreateManyInput | FriendRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FriendRequest createManyAndReturn
   */
  export type FriendRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * The data used to create many FriendRequests.
     */
    data: FriendRequestCreateManyInput | FriendRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FriendRequest update
   */
  export type FriendRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a FriendRequest.
     */
    data: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
    /**
     * Choose, which FriendRequest to update.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest updateMany
   */
  export type FriendRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FriendRequests.
     */
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyInput>
    /**
     * Filter which FriendRequests to update
     */
    where?: FriendRequestWhereInput
    /**
     * Limit how many FriendRequests to update.
     */
    limit?: number
  }

  /**
   * FriendRequest updateManyAndReturn
   */
  export type FriendRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * The data used to update FriendRequests.
     */
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyInput>
    /**
     * Filter which FriendRequests to update
     */
    where?: FriendRequestWhereInput
    /**
     * Limit how many FriendRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FriendRequest upsert
   */
  export type FriendRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the FriendRequest to update in case it exists.
     */
    where: FriendRequestWhereUniqueInput
    /**
     * In case the FriendRequest found by the `where` argument doesn't exist, create a new FriendRequest with this data.
     */
    create: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
    /**
     * In case the FriendRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
  }

  /**
   * FriendRequest delete
   */
  export type FriendRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter which FriendRequest to delete.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest deleteMany
   */
  export type FriendRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequests to delete
     */
    where?: FriendRequestWhereInput
    /**
     * Limit how many FriendRequests to delete.
     */
    limit?: number
  }

  /**
   * FriendRequest without action
   */
  export type FriendRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    since: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    since: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    user1Id: number
    user2Id: number
    since: number
    _all: number
  }


  export type FriendshipMinAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    since?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    since?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    since?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: string
    user1Id: string
    user2Id: string
    since: Date
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    since?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    since?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    since?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    since?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1Id" | "user2Id" | "since", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user1Id: string
      user2Id: string
      since: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
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
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'String'>
    readonly user1Id: FieldRef<"Friendship", 'String'>
    readonly user2Id: FieldRef<"Friendship", 'String'>
    readonly since: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    alt: 'alt',
    fileId: 'fileId',
    fileWidth: 'fileWidth',
    fileHeight: 'fileHeight',
    uploadedById: 'uploadedById',
    likes: 'likes',
    dislikes: 'dislikes',
    createdAt: 'createdAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    imageId: 'imageId',
    createdAt: 'createdAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const DislikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    imageId: 'imageId',
    createdAt: 'createdAt'
  };

  export type DislikeScalarFieldEnum = (typeof DislikeScalarFieldEnum)[keyof typeof DislikeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    imageId: 'imageId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    imageId: 'imageId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const FriendRequestScalarFieldEnum: {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    createdAt: 'createdAt'
  };

  export type FriendRequestScalarFieldEnum = (typeof FriendRequestScalarFieldEnum)[keyof typeof FriendRequestScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    since: 'since'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    sentRequests?: FriendRequestListRelationFilter
    receivedRequests?: FriendRequestListRelationFilter
    friendsAsUser1?: FriendshipListRelationFilter
    friendsAsUser2?: FriendshipListRelationFilter
    images?: ImageListRelationFilter
    comments?: CommentListRelationFilter
    favorites?: FavoriteListRelationFilter
    likes?: LikeListRelationFilter
    dislikes?: DislikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    sentRequests?: FriendRequestOrderByRelationAggregateInput
    receivedRequests?: FriendRequestOrderByRelationAggregateInput
    friendsAsUser1?: FriendshipOrderByRelationAggregateInput
    friendsAsUser2?: FriendshipOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    dislikes?: DislikeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    sentRequests?: FriendRequestListRelationFilter
    receivedRequests?: FriendRequestListRelationFilter
    friendsAsUser1?: FriendshipListRelationFilter
    friendsAsUser2?: FriendshipListRelationFilter
    images?: ImageListRelationFilter
    comments?: CommentListRelationFilter
    favorites?: FavoriteListRelationFilter
    likes?: LikeListRelationFilter
    dislikes?: DislikeListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    fileId?: StringFilter<"Image"> | string
    fileWidth?: IntNullableFilter<"Image"> | number | null
    fileHeight?: IntNullableFilter<"Image"> | number | null
    uploadedById?: StringFilter<"Image"> | string
    likes?: IntFilter<"Image"> | number
    dislikes?: IntFilter<"Image"> | number
    createdAt?: DateTimeFilter<"Image"> | Date | string
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    likedBy?: LikeListRelationFilter
    dislikedBy?: DislikeListRelationFilter
    comments?: CommentListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    fileId?: SortOrder
    fileWidth?: SortOrderInput | SortOrder
    fileHeight?: SortOrderInput | SortOrder
    uploadedById?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    createdAt?: SortOrder
    uploadedBy?: UserOrderByWithRelationInput
    likedBy?: LikeOrderByRelationAggregateInput
    dislikedBy?: DislikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    fileId?: StringFilter<"Image"> | string
    fileWidth?: IntNullableFilter<"Image"> | number | null
    fileHeight?: IntNullableFilter<"Image"> | number | null
    uploadedById?: StringFilter<"Image"> | string
    likes?: IntFilter<"Image"> | number
    dislikes?: IntFilter<"Image"> | number
    createdAt?: DateTimeFilter<"Image"> | Date | string
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    likedBy?: LikeListRelationFilter
    dislikedBy?: DislikeListRelationFilter
    comments?: CommentListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    fileId?: SortOrder
    fileWidth?: SortOrderInput | SortOrder
    fileHeight?: SortOrderInput | SortOrder
    uploadedById?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    createdAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    alt?: StringNullableWithAggregatesFilter<"Image"> | string | null
    fileId?: StringWithAggregatesFilter<"Image"> | string
    fileWidth?: IntNullableWithAggregatesFilter<"Image"> | number | null
    fileHeight?: IntNullableWithAggregatesFilter<"Image"> | number | null
    uploadedById?: StringWithAggregatesFilter<"Image"> | string
    likes?: IntWithAggregatesFilter<"Image"> | number
    dislikes?: IntWithAggregatesFilter<"Image"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    imageId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_imageId?: LikeUserIdImageIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    userId?: StringFilter<"Like"> | string
    imageId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id" | "userId_imageId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Like"> | string
    userId?: StringWithAggregatesFilter<"Like"> | string
    imageId?: StringWithAggregatesFilter<"Like"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type DislikeWhereInput = {
    AND?: DislikeWhereInput | DislikeWhereInput[]
    OR?: DislikeWhereInput[]
    NOT?: DislikeWhereInput | DislikeWhereInput[]
    id?: StringFilter<"Dislike"> | string
    userId?: StringFilter<"Dislike"> | string
    imageId?: StringFilter<"Dislike"> | string
    createdAt?: DateTimeFilter<"Dislike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type DislikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type DislikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_imageId?: DislikeUserIdImageIdCompoundUniqueInput
    AND?: DislikeWhereInput | DislikeWhereInput[]
    OR?: DislikeWhereInput[]
    NOT?: DislikeWhereInput | DislikeWhereInput[]
    userId?: StringFilter<"Dislike"> | string
    imageId?: StringFilter<"Dislike"> | string
    createdAt?: DateTimeFilter<"Dislike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id" | "userId_imageId">

  export type DislikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    _count?: DislikeCountOrderByAggregateInput
    _max?: DislikeMaxOrderByAggregateInput
    _min?: DislikeMinOrderByAggregateInput
  }

  export type DislikeScalarWhereWithAggregatesInput = {
    AND?: DislikeScalarWhereWithAggregatesInput | DislikeScalarWhereWithAggregatesInput[]
    OR?: DislikeScalarWhereWithAggregatesInput[]
    NOT?: DislikeScalarWhereWithAggregatesInput | DislikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dislike"> | string
    userId?: StringWithAggregatesFilter<"Dislike"> | string
    imageId?: StringWithAggregatesFilter<"Dislike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dislike"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    imageId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    image?: ImageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    imageId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    imageId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    imageId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_imageId?: FavoriteUserIdImageIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    imageId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id" | "userId_imageId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    imageId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type FriendRequestWhereInput = {
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    id?: StringFilter<"FriendRequest"> | string
    fromId?: StringFilter<"FriendRequest"> | string
    toId?: StringFilter<"FriendRequest"> | string
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
    from?: XOR<UserScalarRelationFilter, UserWhereInput>
    to?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendRequestOrderByWithRelationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
    from?: UserOrderByWithRelationInput
    to?: UserOrderByWithRelationInput
  }

  export type FriendRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    fromId?: StringFilter<"FriendRequest"> | string
    toId?: StringFilter<"FriendRequest"> | string
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
    from?: XOR<UserScalarRelationFilter, UserWhereInput>
    to?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FriendRequestOrderByWithAggregationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
    _count?: FriendRequestCountOrderByAggregateInput
    _max?: FriendRequestMaxOrderByAggregateInput
    _min?: FriendRequestMinOrderByAggregateInput
  }

  export type FriendRequestScalarWhereWithAggregatesInput = {
    AND?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    OR?: FriendRequestScalarWhereWithAggregatesInput[]
    NOT?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FriendRequest"> | string
    fromId?: StringWithAggregatesFilter<"FriendRequest"> | string
    toId?: StringWithAggregatesFilter<"FriendRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FriendRequest"> | Date | string
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: StringFilter<"Friendship"> | string
    user1Id?: StringFilter<"Friendship"> | string
    user2Id?: StringFilter<"Friendship"> | string
    since?: DateTimeFilter<"Friendship"> | Date | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    since?: SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user1Id_user2Id?: FriendshipUser1IdUser2IdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    user1Id?: StringFilter<"Friendship"> | string
    user2Id?: StringFilter<"Friendship"> | string
    since?: DateTimeFilter<"Friendship"> | Date | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user1Id_user2Id">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    since?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friendship"> | string
    user1Id?: StringWithAggregatesFilter<"Friendship"> | string
    user2Id?: StringWithAggregatesFilter<"Friendship"> | string
    since?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    images?: ImageCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    dislikes?: DislikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestUncheckedCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    images?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    images?: ImageUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUncheckedUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    images?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    username: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutImagesInput
    likedBy?: LikeCreateNestedManyWithoutImageInput
    dislikedBy?: DislikeCreateNestedManyWithoutImageInput
    comments?: CommentCreateNestedManyWithoutImageInput
    favorites?: FavoriteCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    uploadedById: string
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    likedBy?: LikeUncheckedCreateNestedManyWithoutImageInput
    dislikedBy?: DislikeUncheckedCreateNestedManyWithoutImageInput
    comments?: CommentUncheckedCreateNestedManyWithoutImageInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutImagesNestedInput
    likedBy?: LikeUpdateManyWithoutImageNestedInput
    dislikedBy?: DislikeUpdateManyWithoutImageNestedInput
    comments?: CommentUpdateManyWithoutImageNestedInput
    favorites?: FavoriteUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikeUncheckedUpdateManyWithoutImageNestedInput
    dislikedBy?: DislikeUncheckedUpdateManyWithoutImageNestedInput
    comments?: CommentUncheckedUpdateManyWithoutImageNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    uploadedById: string
    likes?: number
    dislikes?: number
    createdAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    image: ImageCreateNestedOneWithoutLikedByInput
  }

  export type LikeUncheckedCreateInput = {
    id?: string
    userId: string
    imageId: string
    createdAt?: Date | string
  }

  export type LikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    image?: ImageUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id?: string
    userId: string
    imageId: string
    createdAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DislikeCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDislikesInput
    image: ImageCreateNestedOneWithoutDislikedByInput
  }

  export type DislikeUncheckedCreateInput = {
    id?: string
    userId: string
    imageId: string
    createdAt?: Date | string
  }

  export type DislikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDislikesNestedInput
    image?: ImageUpdateOneRequiredWithoutDislikedByNestedInput
  }

  export type DislikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DislikeCreateManyInput = {
    id?: string
    userId: string
    imageId: string
    createdAt?: Date | string
  }

  export type DislikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DislikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    image: ImageCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    imageId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    imageId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
    image: ImageCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    imageId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    image?: ImageUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    userId: string
    imageId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestCreateInput = {
    id?: string
    createdAt?: Date | string
    from: UserCreateNestedOneWithoutSentRequestsInput
    to: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type FriendRequestUncheckedCreateInput = {
    id?: string
    fromId: string
    toId: string
    createdAt?: Date | string
  }

  export type FriendRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
    to?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type FriendRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestCreateManyInput = {
    id?: string
    fromId: string
    toId: string
    createdAt?: Date | string
  }

  export type FriendRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateInput = {
    id?: string
    since?: Date | string
    user1: UserCreateNestedOneWithoutFriendsAsUser1Input
    user2: UserCreateNestedOneWithoutFriendsAsUser2Input
  }

  export type FriendshipUncheckedCreateInput = {
    id?: string
    user1Id: string
    user2Id: string
    since?: Date | string
  }

  export type FriendshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutFriendsAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutFriendsAsUser2NestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    since?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    id?: string
    user1Id: string
    user2Id: string
    since?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    since?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    since?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FriendRequestListRelationFilter = {
    every?: FriendRequestWhereInput
    some?: FriendRequestWhereInput
    none?: FriendRequestWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type DislikeListRelationFilter = {
    every?: DislikeWhereInput
    some?: DislikeWhereInput
    none?: DislikeWhereInput
  }

  export type FriendRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DislikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    fileId?: SortOrder
    fileWidth?: SortOrder
    fileHeight?: SortOrder
    uploadedById?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    fileWidth?: SortOrder
    fileHeight?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    fileId?: SortOrder
    fileWidth?: SortOrder
    fileHeight?: SortOrder
    uploadedById?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    fileId?: SortOrder
    fileWidth?: SortOrder
    fileHeight?: SortOrder
    uploadedById?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    fileWidth?: SortOrder
    fileHeight?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type LikeUserIdImageIdCompoundUniqueInput = {
    userId: string
    imageId: string
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type DislikeUserIdImageIdCompoundUniqueInput = {
    userId: string
    imageId: string
  }

  export type DislikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type DislikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type DislikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    imageId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteUserIdImageIdCompoundUniqueInput = {
    userId: string
    imageId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendRequestCountOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendRequestMinOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipUser1IdUser2IdCompoundUniqueInput = {
    user1Id: string
    user2Id: string
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    since?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    since?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    since?: SortOrder
  }

  export type FriendRequestCreateNestedManyWithoutFromInput = {
    create?: XOR<FriendRequestCreateWithoutFromInput, FriendRequestUncheckedCreateWithoutFromInput> | FriendRequestCreateWithoutFromInput[] | FriendRequestUncheckedCreateWithoutFromInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFromInput | FriendRequestCreateOrConnectWithoutFromInput[]
    createMany?: FriendRequestCreateManyFromInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendRequestCreateNestedManyWithoutToInput = {
    create?: XOR<FriendRequestCreateWithoutToInput, FriendRequestUncheckedCreateWithoutToInput> | FriendRequestCreateWithoutToInput[] | FriendRequestUncheckedCreateWithoutToInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutToInput | FriendRequestCreateOrConnectWithoutToInput[]
    createMany?: FriendRequestCreateManyToInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutUser1Input = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutUser2Input = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput> | ImageCreateWithoutUploadedByInput[] | ImageUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUploadedByInput | ImageCreateOrConnectWithoutUploadedByInput[]
    createMany?: ImageCreateManyUploadedByInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type DislikeCreateNestedManyWithoutUserInput = {
    create?: XOR<DislikeCreateWithoutUserInput, DislikeUncheckedCreateWithoutUserInput> | DislikeCreateWithoutUserInput[] | DislikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutUserInput | DislikeCreateOrConnectWithoutUserInput[]
    createMany?: DislikeCreateManyUserInputEnvelope
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
  }

  export type FriendRequestUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<FriendRequestCreateWithoutFromInput, FriendRequestUncheckedCreateWithoutFromInput> | FriendRequestCreateWithoutFromInput[] | FriendRequestUncheckedCreateWithoutFromInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFromInput | FriendRequestCreateOrConnectWithoutFromInput[]
    createMany?: FriendRequestCreateManyFromInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendRequestUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<FriendRequestCreateWithoutToInput, FriendRequestUncheckedCreateWithoutToInput> | FriendRequestCreateWithoutToInput[] | FriendRequestUncheckedCreateWithoutToInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutToInput | FriendRequestCreateOrConnectWithoutToInput[]
    createMany?: FriendRequestCreateManyToInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput> | ImageCreateWithoutUploadedByInput[] | ImageUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUploadedByInput | ImageCreateOrConnectWithoutUploadedByInput[]
    createMany?: ImageCreateManyUploadedByInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type DislikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DislikeCreateWithoutUserInput, DislikeUncheckedCreateWithoutUserInput> | DislikeCreateWithoutUserInput[] | DislikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutUserInput | DislikeCreateOrConnectWithoutUserInput[]
    createMany?: DislikeCreateManyUserInputEnvelope
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FriendRequestUpdateManyWithoutFromNestedInput = {
    create?: XOR<FriendRequestCreateWithoutFromInput, FriendRequestUncheckedCreateWithoutFromInput> | FriendRequestCreateWithoutFromInput[] | FriendRequestUncheckedCreateWithoutFromInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFromInput | FriendRequestCreateOrConnectWithoutFromInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutFromInput | FriendRequestUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: FriendRequestCreateManyFromInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutFromInput | FriendRequestUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutFromInput | FriendRequestUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendRequestUpdateManyWithoutToNestedInput = {
    create?: XOR<FriendRequestCreateWithoutToInput, FriendRequestUncheckedCreateWithoutToInput> | FriendRequestCreateWithoutToInput[] | FriendRequestUncheckedCreateWithoutToInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutToInput | FriendRequestCreateOrConnectWithoutToInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutToInput | FriendRequestUpsertWithWhereUniqueWithoutToInput[]
    createMany?: FriendRequestCreateManyToInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutToInput | FriendRequestUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutToInput | FriendRequestUpdateManyWithWhereWithoutToInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutUser1NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser1Input | FriendshipUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser1Input | FriendshipUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser1Input | FriendshipUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutUser2NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser2Input | FriendshipUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser2Input | FriendshipUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser2Input | FriendshipUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput> | ImageCreateWithoutUploadedByInput[] | ImageUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUploadedByInput | ImageCreateOrConnectWithoutUploadedByInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutUploadedByInput | ImageUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: ImageCreateManyUploadedByInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutUploadedByInput | ImageUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutUploadedByInput | ImageUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type DislikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<DislikeCreateWithoutUserInput, DislikeUncheckedCreateWithoutUserInput> | DislikeCreateWithoutUserInput[] | DislikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutUserInput | DislikeCreateOrConnectWithoutUserInput[]
    upsert?: DislikeUpsertWithWhereUniqueWithoutUserInput | DislikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DislikeCreateManyUserInputEnvelope
    set?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    disconnect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    delete?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    update?: DislikeUpdateWithWhereUniqueWithoutUserInput | DislikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DislikeUpdateManyWithWhereWithoutUserInput | DislikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
  }

  export type FriendRequestUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<FriendRequestCreateWithoutFromInput, FriendRequestUncheckedCreateWithoutFromInput> | FriendRequestCreateWithoutFromInput[] | FriendRequestUncheckedCreateWithoutFromInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFromInput | FriendRequestCreateOrConnectWithoutFromInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutFromInput | FriendRequestUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: FriendRequestCreateManyFromInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutFromInput | FriendRequestUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutFromInput | FriendRequestUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendRequestUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<FriendRequestCreateWithoutToInput, FriendRequestUncheckedCreateWithoutToInput> | FriendRequestCreateWithoutToInput[] | FriendRequestUncheckedCreateWithoutToInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutToInput | FriendRequestCreateOrConnectWithoutToInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutToInput | FriendRequestUpsertWithWhereUniqueWithoutToInput[]
    createMany?: FriendRequestCreateManyToInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutToInput | FriendRequestUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutToInput | FriendRequestUpdateManyWithWhereWithoutToInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input> | FriendshipCreateWithoutUser1Input[] | FriendshipUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser1Input | FriendshipCreateOrConnectWithoutUser1Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser1Input | FriendshipUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: FriendshipCreateManyUser1InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser1Input | FriendshipUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser1Input | FriendshipUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input> | FriendshipCreateWithoutUser2Input[] | FriendshipUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUser2Input | FriendshipCreateOrConnectWithoutUser2Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUser2Input | FriendshipUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: FriendshipCreateManyUser2InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUser2Input | FriendshipUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUser2Input | FriendshipUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput> | ImageCreateWithoutUploadedByInput[] | ImageUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUploadedByInput | ImageCreateOrConnectWithoutUploadedByInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutUploadedByInput | ImageUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: ImageCreateManyUploadedByInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutUploadedByInput | ImageUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutUploadedByInput | ImageUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type DislikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DislikeCreateWithoutUserInput, DislikeUncheckedCreateWithoutUserInput> | DislikeCreateWithoutUserInput[] | DislikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutUserInput | DislikeCreateOrConnectWithoutUserInput[]
    upsert?: DislikeUpsertWithWhereUniqueWithoutUserInput | DislikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DislikeCreateManyUserInputEnvelope
    set?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    disconnect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    delete?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    update?: DislikeUpdateWithWhereUniqueWithoutUserInput | DislikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DislikeUpdateManyWithWhereWithoutUserInput | DislikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutImagesInput = {
    create?: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImagesInput
    connect?: UserWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutImageInput = {
    create?: XOR<LikeCreateWithoutImageInput, LikeUncheckedCreateWithoutImageInput> | LikeCreateWithoutImageInput[] | LikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutImageInput | LikeCreateOrConnectWithoutImageInput[]
    createMany?: LikeCreateManyImageInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type DislikeCreateNestedManyWithoutImageInput = {
    create?: XOR<DislikeCreateWithoutImageInput, DislikeUncheckedCreateWithoutImageInput> | DislikeCreateWithoutImageInput[] | DislikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutImageInput | DislikeCreateOrConnectWithoutImageInput[]
    createMany?: DislikeCreateManyImageInputEnvelope
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutImageInput = {
    create?: XOR<CommentCreateWithoutImageInput, CommentUncheckedCreateWithoutImageInput> | CommentCreateWithoutImageInput[] | CommentUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutImageInput | CommentCreateOrConnectWithoutImageInput[]
    createMany?: CommentCreateManyImageInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutImageInput = {
    create?: XOR<FavoriteCreateWithoutImageInput, FavoriteUncheckedCreateWithoutImageInput> | FavoriteCreateWithoutImageInput[] | FavoriteUncheckedCreateWithoutImageInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutImageInput | FavoriteCreateOrConnectWithoutImageInput[]
    createMany?: FavoriteCreateManyImageInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<LikeCreateWithoutImageInput, LikeUncheckedCreateWithoutImageInput> | LikeCreateWithoutImageInput[] | LikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutImageInput | LikeCreateOrConnectWithoutImageInput[]
    createMany?: LikeCreateManyImageInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type DislikeUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<DislikeCreateWithoutImageInput, DislikeUncheckedCreateWithoutImageInput> | DislikeCreateWithoutImageInput[] | DislikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutImageInput | DislikeCreateOrConnectWithoutImageInput[]
    createMany?: DislikeCreateManyImageInputEnvelope
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<CommentCreateWithoutImageInput, CommentUncheckedCreateWithoutImageInput> | CommentCreateWithoutImageInput[] | CommentUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutImageInput | CommentCreateOrConnectWithoutImageInput[]
    createMany?: CommentCreateManyImageInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<FavoriteCreateWithoutImageInput, FavoriteUncheckedCreateWithoutImageInput> | FavoriteCreateWithoutImageInput[] | FavoriteUncheckedCreateWithoutImageInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutImageInput | FavoriteCreateOrConnectWithoutImageInput[]
    createMany?: FavoriteCreateManyImageInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImagesInput
    upsert?: UserUpsertWithoutImagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImagesInput, UserUpdateWithoutImagesInput>, UserUncheckedUpdateWithoutImagesInput>
  }

  export type LikeUpdateManyWithoutImageNestedInput = {
    create?: XOR<LikeCreateWithoutImageInput, LikeUncheckedCreateWithoutImageInput> | LikeCreateWithoutImageInput[] | LikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutImageInput | LikeCreateOrConnectWithoutImageInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutImageInput | LikeUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: LikeCreateManyImageInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutImageInput | LikeUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutImageInput | LikeUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type DislikeUpdateManyWithoutImageNestedInput = {
    create?: XOR<DislikeCreateWithoutImageInput, DislikeUncheckedCreateWithoutImageInput> | DislikeCreateWithoutImageInput[] | DislikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutImageInput | DislikeCreateOrConnectWithoutImageInput[]
    upsert?: DislikeUpsertWithWhereUniqueWithoutImageInput | DislikeUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: DislikeCreateManyImageInputEnvelope
    set?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    disconnect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    delete?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    update?: DislikeUpdateWithWhereUniqueWithoutImageInput | DislikeUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: DislikeUpdateManyWithWhereWithoutImageInput | DislikeUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutImageNestedInput = {
    create?: XOR<CommentCreateWithoutImageInput, CommentUncheckedCreateWithoutImageInput> | CommentCreateWithoutImageInput[] | CommentUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutImageInput | CommentCreateOrConnectWithoutImageInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutImageInput | CommentUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: CommentCreateManyImageInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutImageInput | CommentUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutImageInput | CommentUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutImageNestedInput = {
    create?: XOR<FavoriteCreateWithoutImageInput, FavoriteUncheckedCreateWithoutImageInput> | FavoriteCreateWithoutImageInput[] | FavoriteUncheckedCreateWithoutImageInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutImageInput | FavoriteCreateOrConnectWithoutImageInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutImageInput | FavoriteUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: FavoriteCreateManyImageInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutImageInput | FavoriteUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutImageInput | FavoriteUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<LikeCreateWithoutImageInput, LikeUncheckedCreateWithoutImageInput> | LikeCreateWithoutImageInput[] | LikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutImageInput | LikeCreateOrConnectWithoutImageInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutImageInput | LikeUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: LikeCreateManyImageInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutImageInput | LikeUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutImageInput | LikeUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type DislikeUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<DislikeCreateWithoutImageInput, DislikeUncheckedCreateWithoutImageInput> | DislikeCreateWithoutImageInput[] | DislikeUncheckedCreateWithoutImageInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutImageInput | DislikeCreateOrConnectWithoutImageInput[]
    upsert?: DislikeUpsertWithWhereUniqueWithoutImageInput | DislikeUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: DislikeCreateManyImageInputEnvelope
    set?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    disconnect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    delete?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    update?: DislikeUpdateWithWhereUniqueWithoutImageInput | DislikeUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: DislikeUpdateManyWithWhereWithoutImageInput | DislikeUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<CommentCreateWithoutImageInput, CommentUncheckedCreateWithoutImageInput> | CommentCreateWithoutImageInput[] | CommentUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutImageInput | CommentCreateOrConnectWithoutImageInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutImageInput | CommentUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: CommentCreateManyImageInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutImageInput | CommentUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutImageInput | CommentUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<FavoriteCreateWithoutImageInput, FavoriteUncheckedCreateWithoutImageInput> | FavoriteCreateWithoutImageInput[] | FavoriteUncheckedCreateWithoutImageInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutImageInput | FavoriteCreateOrConnectWithoutImageInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutImageInput | FavoriteUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: FavoriteCreateManyImageInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutImageInput | FavoriteUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutImageInput | FavoriteUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutLikedByInput = {
    create?: XOR<ImageCreateWithoutLikedByInput, ImageUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: ImageCreateOrConnectWithoutLikedByInput
    connect?: ImageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type ImageUpdateOneRequiredWithoutLikedByNestedInput = {
    create?: XOR<ImageCreateWithoutLikedByInput, ImageUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: ImageCreateOrConnectWithoutLikedByInput
    upsert?: ImageUpsertWithoutLikedByInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutLikedByInput, ImageUpdateWithoutLikedByInput>, ImageUncheckedUpdateWithoutLikedByInput>
  }

  export type UserCreateNestedOneWithoutDislikesInput = {
    create?: XOR<UserCreateWithoutDislikesInput, UserUncheckedCreateWithoutDislikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDislikesInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutDislikedByInput = {
    create?: XOR<ImageCreateWithoutDislikedByInput, ImageUncheckedCreateWithoutDislikedByInput>
    connectOrCreate?: ImageCreateOrConnectWithoutDislikedByInput
    connect?: ImageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDislikesNestedInput = {
    create?: XOR<UserCreateWithoutDislikesInput, UserUncheckedCreateWithoutDislikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDislikesInput
    upsert?: UserUpsertWithoutDislikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDislikesInput, UserUpdateWithoutDislikesInput>, UserUncheckedUpdateWithoutDislikesInput>
  }

  export type ImageUpdateOneRequiredWithoutDislikedByNestedInput = {
    create?: XOR<ImageCreateWithoutDislikedByInput, ImageUncheckedCreateWithoutDislikedByInput>
    connectOrCreate?: ImageCreateOrConnectWithoutDislikedByInput
    upsert?: ImageUpsertWithoutDislikedByInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutDislikedByInput, ImageUpdateWithoutDislikedByInput>, ImageUncheckedUpdateWithoutDislikedByInput>
  }

  export type ImageCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ImageCreateWithoutCommentsInput, ImageUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCommentsInput
    connect?: ImageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ImageUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ImageCreateWithoutCommentsInput, ImageUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCommentsInput
    upsert?: ImageUpsertWithoutCommentsInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutCommentsInput, ImageUpdateWithoutCommentsInput>, ImageUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ImageCreateWithoutFavoritesInput, ImageUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutFavoritesInput
    connect?: ImageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type ImageUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<ImageCreateWithoutFavoritesInput, ImageUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutFavoritesInput
    upsert?: ImageUpsertWithoutFavoritesInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutFavoritesInput, ImageUpdateWithoutFavoritesInput>, ImageUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutSentRequestsInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    upsert?: UserUpsertWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRequestsInput, UserUpdateWithoutSentRequestsInput>, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    upsert?: UserUpsertWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRequestsInput, UserUpdateWithoutReceivedRequestsInput>, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserCreateNestedOneWithoutFriendsAsUser1Input = {
    create?: XOR<UserCreateWithoutFriendsAsUser1Input, UserUncheckedCreateWithoutFriendsAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsAsUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendsAsUser2Input = {
    create?: XOR<UserCreateWithoutFriendsAsUser2Input, UserUncheckedCreateWithoutFriendsAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsAsUser2Input
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendsAsUser1NestedInput = {
    create?: XOR<UserCreateWithoutFriendsAsUser1Input, UserUncheckedCreateWithoutFriendsAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsAsUser1Input
    upsert?: UserUpsertWithoutFriendsAsUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsAsUser1Input, UserUpdateWithoutFriendsAsUser1Input>, UserUncheckedUpdateWithoutFriendsAsUser1Input>
  }

  export type UserUpdateOneRequiredWithoutFriendsAsUser2NestedInput = {
    create?: XOR<UserCreateWithoutFriendsAsUser2Input, UserUncheckedCreateWithoutFriendsAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsAsUser2Input
    upsert?: UserUpsertWithoutFriendsAsUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsAsUser2Input, UserUpdateWithoutFriendsAsUser2Input>, UserUncheckedUpdateWithoutFriendsAsUser2Input>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FriendRequestCreateWithoutFromInput = {
    id?: string
    createdAt?: Date | string
    to: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type FriendRequestUncheckedCreateWithoutFromInput = {
    id?: string
    toId: string
    createdAt?: Date | string
  }

  export type FriendRequestCreateOrConnectWithoutFromInput = {
    where: FriendRequestWhereUniqueInput
    create: XOR<FriendRequestCreateWithoutFromInput, FriendRequestUncheckedCreateWithoutFromInput>
  }

  export type FriendRequestCreateManyFromInputEnvelope = {
    data: FriendRequestCreateManyFromInput | FriendRequestCreateManyFromInput[]
    skipDuplicates?: boolean
  }

  export type FriendRequestCreateWithoutToInput = {
    id?: string
    createdAt?: Date | string
    from: UserCreateNestedOneWithoutSentRequestsInput
  }

  export type FriendRequestUncheckedCreateWithoutToInput = {
    id?: string
    fromId: string
    createdAt?: Date | string
  }

  export type FriendRequestCreateOrConnectWithoutToInput = {
    where: FriendRequestWhereUniqueInput
    create: XOR<FriendRequestCreateWithoutToInput, FriendRequestUncheckedCreateWithoutToInput>
  }

  export type FriendRequestCreateManyToInputEnvelope = {
    data: FriendRequestCreateManyToInput | FriendRequestCreateManyToInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutUser1Input = {
    id?: string
    since?: Date | string
    user2: UserCreateNestedOneWithoutFriendsAsUser2Input
  }

  export type FriendshipUncheckedCreateWithoutUser1Input = {
    id?: string
    user2Id: string
    since?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutUser1Input = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input>
  }

  export type FriendshipCreateManyUser1InputEnvelope = {
    data: FriendshipCreateManyUser1Input | FriendshipCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutUser2Input = {
    id?: string
    since?: Date | string
    user1: UserCreateNestedOneWithoutFriendsAsUser1Input
  }

  export type FriendshipUncheckedCreateWithoutUser2Input = {
    id?: string
    user1Id: string
    since?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutUser2Input = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input>
  }

  export type FriendshipCreateManyUser2InputEnvelope = {
    data: FriendshipCreateManyUser2Input | FriendshipCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutUploadedByInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    likedBy?: LikeCreateNestedManyWithoutImageInput
    dislikedBy?: DislikeCreateNestedManyWithoutImageInput
    comments?: CommentCreateNestedManyWithoutImageInput
    favorites?: FavoriteCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutUploadedByInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    likedBy?: LikeUncheckedCreateNestedManyWithoutImageInput
    dislikedBy?: DislikeUncheckedCreateNestedManyWithoutImageInput
    comments?: CommentUncheckedCreateNestedManyWithoutImageInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutUploadedByInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput>
  }

  export type ImageCreateManyUploadedByInputEnvelope = {
    data: ImageCreateManyUploadedByInput | ImageCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    image: ImageCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    imageId: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    image: ImageCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    imageId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    image: ImageCreateNestedOneWithoutLikedByInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: string
    imageId: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DislikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    image: ImageCreateNestedOneWithoutDislikedByInput
  }

  export type DislikeUncheckedCreateWithoutUserInput = {
    id?: string
    imageId: string
    createdAt?: Date | string
  }

  export type DislikeCreateOrConnectWithoutUserInput = {
    where: DislikeWhereUniqueInput
    create: XOR<DislikeCreateWithoutUserInput, DislikeUncheckedCreateWithoutUserInput>
  }

  export type DislikeCreateManyUserInputEnvelope = {
    data: DislikeCreateManyUserInput | DislikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendRequestUpsertWithWhereUniqueWithoutFromInput = {
    where: FriendRequestWhereUniqueInput
    update: XOR<FriendRequestUpdateWithoutFromInput, FriendRequestUncheckedUpdateWithoutFromInput>
    create: XOR<FriendRequestCreateWithoutFromInput, FriendRequestUncheckedCreateWithoutFromInput>
  }

  export type FriendRequestUpdateWithWhereUniqueWithoutFromInput = {
    where: FriendRequestWhereUniqueInput
    data: XOR<FriendRequestUpdateWithoutFromInput, FriendRequestUncheckedUpdateWithoutFromInput>
  }

  export type FriendRequestUpdateManyWithWhereWithoutFromInput = {
    where: FriendRequestScalarWhereInput
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyWithoutFromInput>
  }

  export type FriendRequestScalarWhereInput = {
    AND?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
    OR?: FriendRequestScalarWhereInput[]
    NOT?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
    id?: StringFilter<"FriendRequest"> | string
    fromId?: StringFilter<"FriendRequest"> | string
    toId?: StringFilter<"FriendRequest"> | string
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
  }

  export type FriendRequestUpsertWithWhereUniqueWithoutToInput = {
    where: FriendRequestWhereUniqueInput
    update: XOR<FriendRequestUpdateWithoutToInput, FriendRequestUncheckedUpdateWithoutToInput>
    create: XOR<FriendRequestCreateWithoutToInput, FriendRequestUncheckedCreateWithoutToInput>
  }

  export type FriendRequestUpdateWithWhereUniqueWithoutToInput = {
    where: FriendRequestWhereUniqueInput
    data: XOR<FriendRequestUpdateWithoutToInput, FriendRequestUncheckedUpdateWithoutToInput>
  }

  export type FriendRequestUpdateManyWithWhereWithoutToInput = {
    where: FriendRequestScalarWhereInput
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyWithoutToInput>
  }

  export type FriendshipUpsertWithWhereUniqueWithoutUser1Input = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutUser1Input, FriendshipUncheckedUpdateWithoutUser1Input>
    create: XOR<FriendshipCreateWithoutUser1Input, FriendshipUncheckedCreateWithoutUser1Input>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutUser1Input = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutUser1Input, FriendshipUncheckedUpdateWithoutUser1Input>
  }

  export type FriendshipUpdateManyWithWhereWithoutUser1Input = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutUser1Input>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: StringFilter<"Friendship"> | string
    user1Id?: StringFilter<"Friendship"> | string
    user2Id?: StringFilter<"Friendship"> | string
    since?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutUser2Input = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutUser2Input, FriendshipUncheckedUpdateWithoutUser2Input>
    create: XOR<FriendshipCreateWithoutUser2Input, FriendshipUncheckedCreateWithoutUser2Input>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutUser2Input = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutUser2Input, FriendshipUncheckedUpdateWithoutUser2Input>
  }

  export type FriendshipUpdateManyWithWhereWithoutUser2Input = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutUser2Input>
  }

  export type ImageUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutUploadedByInput, ImageUncheckedUpdateWithoutUploadedByInput>
    create: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutUploadedByInput, ImageUncheckedUpdateWithoutUploadedByInput>
  }

  export type ImageUpdateManyWithWhereWithoutUploadedByInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    fileId?: StringFilter<"Image"> | string
    fileWidth?: IntNullableFilter<"Image"> | number | null
    fileHeight?: IntNullableFilter<"Image"> | number | null
    uploadedById?: StringFilter<"Image"> | string
    likes?: IntFilter<"Image"> | number
    dislikes?: IntFilter<"Image"> | number
    createdAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    imageId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    imageId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    imageId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
  }

  export type DislikeUpsertWithWhereUniqueWithoutUserInput = {
    where: DislikeWhereUniqueInput
    update: XOR<DislikeUpdateWithoutUserInput, DislikeUncheckedUpdateWithoutUserInput>
    create: XOR<DislikeCreateWithoutUserInput, DislikeUncheckedCreateWithoutUserInput>
  }

  export type DislikeUpdateWithWhereUniqueWithoutUserInput = {
    where: DislikeWhereUniqueInput
    data: XOR<DislikeUpdateWithoutUserInput, DislikeUncheckedUpdateWithoutUserInput>
  }

  export type DislikeUpdateManyWithWhereWithoutUserInput = {
    where: DislikeScalarWhereInput
    data: XOR<DislikeUpdateManyMutationInput, DislikeUncheckedUpdateManyWithoutUserInput>
  }

  export type DislikeScalarWhereInput = {
    AND?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
    OR?: DislikeScalarWhereInput[]
    NOT?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
    id?: StringFilter<"Dislike"> | string
    userId?: StringFilter<"Dislike"> | string
    imageId?: StringFilter<"Dislike"> | string
    createdAt?: DateTimeFilter<"Dislike"> | Date | string
  }

  export type UserCreateWithoutImagesInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    dislikes?: DislikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutImagesInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestUncheckedCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
  }

  export type LikeCreateWithoutImageInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutImageInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutImageInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutImageInput, LikeUncheckedCreateWithoutImageInput>
  }

  export type LikeCreateManyImageInputEnvelope = {
    data: LikeCreateManyImageInput | LikeCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type DislikeCreateWithoutImageInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDislikesInput
  }

  export type DislikeUncheckedCreateWithoutImageInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type DislikeCreateOrConnectWithoutImageInput = {
    where: DislikeWhereUniqueInput
    create: XOR<DislikeCreateWithoutImageInput, DislikeUncheckedCreateWithoutImageInput>
  }

  export type DislikeCreateManyImageInputEnvelope = {
    data: DislikeCreateManyImageInput | DislikeCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutImageInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutImageInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutImageInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutImageInput, CommentUncheckedCreateWithoutImageInput>
  }

  export type CommentCreateManyImageInputEnvelope = {
    data: CommentCreateManyImageInput | CommentCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutImageInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutImageInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutImageInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutImageInput, FavoriteUncheckedCreateWithoutImageInput>
  }

  export type FavoriteCreateManyImageInputEnvelope = {
    data: FavoriteCreateManyImageInput | FavoriteCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutImagesInput = {
    update: XOR<UserUpdateWithoutImagesInput, UserUncheckedUpdateWithoutImagesInput>
    create: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImagesInput, UserUncheckedUpdateWithoutImagesInput>
  }

  export type UserUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUncheckedUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LikeUpsertWithWhereUniqueWithoutImageInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutImageInput, LikeUncheckedUpdateWithoutImageInput>
    create: XOR<LikeCreateWithoutImageInput, LikeUncheckedCreateWithoutImageInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutImageInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutImageInput, LikeUncheckedUpdateWithoutImageInput>
  }

  export type LikeUpdateManyWithWhereWithoutImageInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutImageInput>
  }

  export type DislikeUpsertWithWhereUniqueWithoutImageInput = {
    where: DislikeWhereUniqueInput
    update: XOR<DislikeUpdateWithoutImageInput, DislikeUncheckedUpdateWithoutImageInput>
    create: XOR<DislikeCreateWithoutImageInput, DislikeUncheckedCreateWithoutImageInput>
  }

  export type DislikeUpdateWithWhereUniqueWithoutImageInput = {
    where: DislikeWhereUniqueInput
    data: XOR<DislikeUpdateWithoutImageInput, DislikeUncheckedUpdateWithoutImageInput>
  }

  export type DislikeUpdateManyWithWhereWithoutImageInput = {
    where: DislikeScalarWhereInput
    data: XOR<DislikeUpdateManyMutationInput, DislikeUncheckedUpdateManyWithoutImageInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutImageInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutImageInput, CommentUncheckedUpdateWithoutImageInput>
    create: XOR<CommentCreateWithoutImageInput, CommentUncheckedCreateWithoutImageInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutImageInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutImageInput, CommentUncheckedUpdateWithoutImageInput>
  }

  export type CommentUpdateManyWithWhereWithoutImageInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutImageInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutImageInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutImageInput, FavoriteUncheckedUpdateWithoutImageInput>
    create: XOR<FavoriteCreateWithoutImageInput, FavoriteUncheckedCreateWithoutImageInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutImageInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutImageInput, FavoriteUncheckedUpdateWithoutImageInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutImageInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutImageInput>
  }

  export type UserCreateWithoutLikesInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    images?: ImageCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    dislikes?: DislikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestUncheckedCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    images?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type ImageCreateWithoutLikedByInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutImagesInput
    dislikedBy?: DislikeCreateNestedManyWithoutImageInput
    comments?: CommentCreateNestedManyWithoutImageInput
    favorites?: FavoriteCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutLikedByInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    uploadedById: string
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    dislikedBy?: DislikeUncheckedCreateNestedManyWithoutImageInput
    comments?: CommentUncheckedCreateNestedManyWithoutImageInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutLikedByInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutLikedByInput, ImageUncheckedCreateWithoutLikedByInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    images?: ImageUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUncheckedUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    images?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ImageUpsertWithoutLikedByInput = {
    update: XOR<ImageUpdateWithoutLikedByInput, ImageUncheckedUpdateWithoutLikedByInput>
    create: XOR<ImageCreateWithoutLikedByInput, ImageUncheckedCreateWithoutLikedByInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutLikedByInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutLikedByInput, ImageUncheckedUpdateWithoutLikedByInput>
  }

  export type ImageUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutImagesNestedInput
    dislikedBy?: DislikeUpdateManyWithoutImageNestedInput
    comments?: CommentUpdateManyWithoutImageNestedInput
    favorites?: FavoriteUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dislikedBy?: DislikeUncheckedUpdateManyWithoutImageNestedInput
    comments?: CommentUncheckedUpdateManyWithoutImageNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutImageNestedInput
  }

  export type UserCreateWithoutDislikesInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    images?: ImageCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDislikesInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestUncheckedCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    images?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDislikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDislikesInput, UserUncheckedCreateWithoutDislikesInput>
  }

  export type ImageCreateWithoutDislikedByInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutImagesInput
    likedBy?: LikeCreateNestedManyWithoutImageInput
    comments?: CommentCreateNestedManyWithoutImageInput
    favorites?: FavoriteCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutDislikedByInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    uploadedById: string
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    likedBy?: LikeUncheckedCreateNestedManyWithoutImageInput
    comments?: CommentUncheckedCreateNestedManyWithoutImageInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutDislikedByInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutDislikedByInput, ImageUncheckedCreateWithoutDislikedByInput>
  }

  export type UserUpsertWithoutDislikesInput = {
    update: XOR<UserUpdateWithoutDislikesInput, UserUncheckedUpdateWithoutDislikesInput>
    create: XOR<UserCreateWithoutDislikesInput, UserUncheckedCreateWithoutDislikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDislikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDislikesInput, UserUncheckedUpdateWithoutDislikesInput>
  }

  export type UserUpdateWithoutDislikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    images?: ImageUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDislikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUncheckedUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    images?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ImageUpsertWithoutDislikedByInput = {
    update: XOR<ImageUpdateWithoutDislikedByInput, ImageUncheckedUpdateWithoutDislikedByInput>
    create: XOR<ImageCreateWithoutDislikedByInput, ImageUncheckedCreateWithoutDislikedByInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutDislikedByInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutDislikedByInput, ImageUncheckedUpdateWithoutDislikedByInput>
  }

  export type ImageUpdateWithoutDislikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutImagesNestedInput
    likedBy?: LikeUpdateManyWithoutImageNestedInput
    comments?: CommentUpdateManyWithoutImageNestedInput
    favorites?: FavoriteUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutDislikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikeUncheckedUpdateManyWithoutImageNestedInput
    comments?: CommentUncheckedUpdateManyWithoutImageNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateWithoutCommentsInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutImagesInput
    likedBy?: LikeCreateNestedManyWithoutImageInput
    dislikedBy?: DislikeCreateNestedManyWithoutImageInput
    favorites?: FavoriteCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutCommentsInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    uploadedById: string
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    likedBy?: LikeUncheckedCreateNestedManyWithoutImageInput
    dislikedBy?: DislikeUncheckedCreateNestedManyWithoutImageInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutCommentsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCommentsInput, ImageUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    images?: ImageCreateNestedManyWithoutUploadedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    dislikes?: DislikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestUncheckedCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    images?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ImageUpsertWithoutCommentsInput = {
    update: XOR<ImageUpdateWithoutCommentsInput, ImageUncheckedUpdateWithoutCommentsInput>
    create: XOR<ImageCreateWithoutCommentsInput, ImageUncheckedCreateWithoutCommentsInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutCommentsInput, ImageUncheckedUpdateWithoutCommentsInput>
  }

  export type ImageUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutImagesNestedInput
    likedBy?: LikeUpdateManyWithoutImageNestedInput
    dislikedBy?: DislikeUpdateManyWithoutImageNestedInput
    favorites?: FavoriteUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikeUncheckedUpdateManyWithoutImageNestedInput
    dislikedBy?: DislikeUncheckedUpdateManyWithoutImageNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutImageNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    images?: ImageUpdateManyWithoutUploadedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUncheckedUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    images?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFavoritesInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    images?: ImageCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    dislikes?: DislikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestUncheckedCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    images?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type ImageCreateWithoutFavoritesInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutImagesInput
    likedBy?: LikeCreateNestedManyWithoutImageInput
    dislikedBy?: DislikeCreateNestedManyWithoutImageInput
    comments?: CommentCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutFavoritesInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    uploadedById: string
    likes?: number
    dislikes?: number
    createdAt?: Date | string
    likedBy?: LikeUncheckedCreateNestedManyWithoutImageInput
    dislikedBy?: DislikeUncheckedCreateNestedManyWithoutImageInput
    comments?: CommentUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutFavoritesInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutFavoritesInput, ImageUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    images?: ImageUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUncheckedUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    images?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ImageUpsertWithoutFavoritesInput = {
    update: XOR<ImageUpdateWithoutFavoritesInput, ImageUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ImageCreateWithoutFavoritesInput, ImageUncheckedCreateWithoutFavoritesInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutFavoritesInput, ImageUncheckedUpdateWithoutFavoritesInput>
  }

  export type ImageUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutImagesNestedInput
    likedBy?: LikeUpdateManyWithoutImageNestedInput
    dislikedBy?: DislikeUpdateManyWithoutImageNestedInput
    comments?: CommentUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikeUncheckedUpdateManyWithoutImageNestedInput
    dislikedBy?: DislikeUncheckedUpdateManyWithoutImageNestedInput
    comments?: CommentUncheckedUpdateManyWithoutImageNestedInput
  }

  export type UserCreateWithoutSentRequestsInput = {
    id: string
    username: string
    email: string
    receivedRequests?: FriendRequestCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    images?: ImageCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    dislikes?: DislikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentRequestsInput = {
    id: string
    username: string
    email: string
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    images?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
  }

  export type UserCreateWithoutReceivedRequestsInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestCreateNestedManyWithoutFromInput
    friendsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    images?: ImageCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    dislikes?: DislikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedRequestsInput = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestUncheckedCreateNestedManyWithoutFromInput
    friendsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    friendsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    images?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
  }

  export type UserUpsertWithoutSentRequestsInput = {
    update: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    receivedRequests?: FriendRequestUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    images?: ImageUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    images?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUpdateManyWithoutFromNestedInput
    friendsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    images?: ImageUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUncheckedUpdateManyWithoutFromNestedInput
    friendsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    friendsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    images?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFriendsAsUser1Input = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutToInput
    friendsAsUser2?: FriendshipCreateNestedManyWithoutUser2Input
    images?: ImageCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    dislikes?: DislikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendsAsUser1Input = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestUncheckedCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutToInput
    friendsAsUser2?: FriendshipUncheckedCreateNestedManyWithoutUser2Input
    images?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendsAsUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsAsUser1Input, UserUncheckedCreateWithoutFriendsAsUser1Input>
  }

  export type UserCreateWithoutFriendsAsUser2Input = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipCreateNestedManyWithoutUser1Input
    images?: ImageCreateNestedManyWithoutUploadedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    dislikes?: DislikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendsAsUser2Input = {
    id: string
    username: string
    email: string
    sentRequests?: FriendRequestUncheckedCreateNestedManyWithoutFromInput
    receivedRequests?: FriendRequestUncheckedCreateNestedManyWithoutToInput
    friendsAsUser1?: FriendshipUncheckedCreateNestedManyWithoutUser1Input
    images?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendsAsUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsAsUser2Input, UserUncheckedCreateWithoutFriendsAsUser2Input>
  }

  export type UserUpsertWithoutFriendsAsUser1Input = {
    update: XOR<UserUpdateWithoutFriendsAsUser1Input, UserUncheckedUpdateWithoutFriendsAsUser1Input>
    create: XOR<UserCreateWithoutFriendsAsUser1Input, UserUncheckedCreateWithoutFriendsAsUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsAsUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsAsUser1Input, UserUncheckedUpdateWithoutFriendsAsUser1Input>
  }

  export type UserUpdateWithoutFriendsAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutToNestedInput
    friendsAsUser2?: FriendshipUpdateManyWithoutUser2NestedInput
    images?: ImageUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUncheckedUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutToNestedInput
    friendsAsUser2?: FriendshipUncheckedUpdateManyWithoutUser2NestedInput
    images?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFriendsAsUser2Input = {
    update: XOR<UserUpdateWithoutFriendsAsUser2Input, UserUncheckedUpdateWithoutFriendsAsUser2Input>
    create: XOR<UserCreateWithoutFriendsAsUser2Input, UserUncheckedCreateWithoutFriendsAsUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsAsUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsAsUser2Input, UserUncheckedUpdateWithoutFriendsAsUser2Input>
  }

  export type UserUpdateWithoutFriendsAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUpdateManyWithoutUser1NestedInput
    images?: ImageUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sentRequests?: FriendRequestUncheckedUpdateManyWithoutFromNestedInput
    receivedRequests?: FriendRequestUncheckedUpdateManyWithoutToNestedInput
    friendsAsUser1?: FriendshipUncheckedUpdateManyWithoutUser1NestedInput
    images?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FriendRequestCreateManyFromInput = {
    id?: string
    toId: string
    createdAt?: Date | string
  }

  export type FriendRequestCreateManyToInput = {
    id?: string
    fromId: string
    createdAt?: Date | string
  }

  export type FriendshipCreateManyUser1Input = {
    id?: string
    user2Id: string
    since?: Date | string
  }

  export type FriendshipCreateManyUser2Input = {
    id?: string
    user1Id: string
    since?: Date | string
  }

  export type ImageCreateManyUploadedByInput = {
    id?: string
    url: string
    alt?: string | null
    fileId: string
    fileWidth?: number | null
    fileHeight?: number | null
    likes?: number
    dislikes?: number
    createdAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    imageId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    imageId: string
    createdAt?: Date | string
  }

  export type LikeCreateManyUserInput = {
    id?: string
    imageId: string
    createdAt?: Date | string
  }

  export type DislikeCreateManyUserInput = {
    id?: string
    imageId: string
    createdAt?: Date | string
  }

  export type FriendRequestUpdateWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type FriendRequestUncheckedUpdateWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
  }

  export type FriendRequestUncheckedUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: UserUpdateOneRequiredWithoutFriendsAsUser2NestedInput
  }

  export type FriendshipUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    since?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    since?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutFriendsAsUser1NestedInput
  }

  export type FriendshipUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    since?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    since?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikeUpdateManyWithoutImageNestedInput
    dislikedBy?: DislikeUpdateManyWithoutImageNestedInput
    comments?: CommentUpdateManyWithoutImageNestedInput
    favorites?: FavoriteUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikeUncheckedUpdateManyWithoutImageNestedInput
    dislikedBy?: DislikeUncheckedUpdateManyWithoutImageNestedInput
    comments?: CommentUncheckedUpdateManyWithoutImageNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: StringFieldUpdateOperationsInput | string
    fileWidth?: NullableIntFieldUpdateOperationsInput | number | null
    fileHeight?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DislikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutDislikedByNestedInput
  }

  export type DislikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DislikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyImageInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type DislikeCreateManyImageInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentCreateManyImageInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateManyImageInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DislikeUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDislikesNestedInput
  }

  export type DislikeUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DislikeUncheckedUpdateManyWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
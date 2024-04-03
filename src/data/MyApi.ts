/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */


export interface AppUser {
  id?: string | null;
  userName?: string | null;
  normalizedUserName?: string | null;
  email?: string | null;
  normalizedEmail?: string | null;
  emailConfirmed?: boolean;
  passwordHash?: string | null;
  securityStamp?: string | null;
  concurrencyStamp?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  /** @format date-time */
  lockoutEnd?: string | null;
  lockoutEnabled?: boolean;
  /** @format int32 */
  accessFailedCount?: number;
  firstName?: string | null;
  lastName?: string | null;
  resetToken?: string | null;
  /** @format date-time */
  resetExpiry?: string | null;
}

export interface Customer {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  lastModified?: string | null;
  cardCode?: string | null;
  cardName?: string | null;
  vatStatus?: string | null;
  phone?: string | null;
  cardType?: string | null;
  /** @format int32 */
  listNum?: number;
  vatIdUnCmp?: string | null;
  /** @format double */
  autoDisc?: number;
}

export interface Invoice {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  lastModified?: string | null;
  /**
   * @minLength 0
   * @maxLength 20
   */
  docNum?: string | null;
  tableNo?: string | null;
  /** @format date-time */
  txnDate?: string;
  /** @format int64 */
  customerId?: number | null;
  customer?: Customer;
  customerName?: string | null;
  appUserId?: string | null;
  appUser?: AppUser;
  /** @format double */
  subTotal?: number;
  /** @format double */
  autoDiscPerc?: number;
  /** @format double */
  manualDiscSum?: number;
  /** @format double */
  grandTotal?: number;
  /** @format double */
  autoDiscSum?: number;
  /** @format double */
  serviceChargeRate?: number;
  serviceType?: ServiceTypes;
  /** @format double */
  serviceCharge?: number;
  /** @format double */
  gstRate?: number;
  /** @format double */
  gstAmount?: number;
  /** @format double */
  netTotal?: number;
  /** @format double */
  paid?: number;
  /** @format double */
  balance?: number;
  /** @format double */
  change?: number;
  qrCode?: string | null;
  items?: InvoiceLine[] | null;
  payments?: Payment[] | null;
  /** @format int32 */
  status?: number | null;
  notes?: string | null;
}

export interface InvoiceLine {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  lastModified?: string | null;
  /** @format int64 */
  cartId?: number;
  cart?: Invoice;
  itemCode?: string | null;
  item?: Item;
  itemName?: string | null;
  /** @format int32 */
  quty?: number;
  /** @format double */
  rate?: number;
  /** @format double */
  total?: number;
  notes?: string | null;
  printed?: boolean;
}

export interface Item {
  itemCode?: string | null;
  itemType?: ItemTypes;
  itemName?: string | null;
  itemDesc?: string | null;
  gstInclusivePrice?: boolean;
  /** @format double */
  price?: number;
  taxable?: boolean;
  /** @format double */
  onHand?: number;
  inStock?: boolean;
  discountable?: boolean;
  active?: boolean;
  /** @format int64 */
  itemCategoryId?: number | null;
}

/** @format int32 */
export enum ItemTypes {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4
}

export interface Payment {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  lastModified?: string | null;
  /** @format int64 */
  invoiceId?: number;
  invoice?: Invoice;
  /** @format int32 */
  paymentMeanId?: number;
  paymentMean?: PaymentMean;
  paymentType?: string | null;
  /** @format date-time */
  txnDate?: string;
  /** @format double */
  amount?: number;
  remarks?: string | null;
}

export interface PaymentMean {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface QuickPickGroup {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  lastModified?: string | null;
  name?: string | null;
  imagePath?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
  items?: QuickPickItem[] | null;
  /** @format int32 */
  groupId?: number | null;
}

export interface QuickPickItem {
  itemCode?: string | null;
  item?: Item;
  /** @format int64 */
  quickPickGroupId?: number;
  quickPickGroup?: QuickPickGroup;
}

/** @format int32 */
export enum ServiceTypes {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3
}

export interface UserActionLog {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  lastModified?: string | null;
  userId?: string | null;
  /** @format date-time */
  timeStamp?: string;
  action?: string | null;
}

export interface UserLoginDto {
  /** @minLength 1 */
  userName: string;
  /** @minLength 1 */
  password: string;
  /** @minLength 1 */
  tenant: string;
}

export interface UserRegistrationDto {
  firstName?: string | null;
  lastName?: string | null;
  /** @minLength 1 */
  userName: string;
  /** @minLength 1 */
  password: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);


  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key]);
    return keys
      .map(key =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };



  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {


    //const toaster = useToaster();

  
    
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;




    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
      }
    ).then(async response => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch(e => {
             // toaster.push(   ' <Notification type="error" header="Operation failed" closable>The email failed to send, please try again later. </Notification>')
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title API
 * @version v1
 *
 * API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name CurrentVersionList
     * @request GET:/Auth/CurrentVersion
     * @secure
     */
    currentVersionList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Auth/CurrentVersion`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name MigrateCreate
     * @request POST:/Auth/Migrate
     * @secure
     */
    migrateCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Auth/Migrate`,
        method: 'POST',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name DefaultDataCreate
     * @request POST:/Auth/DefaultData
     * @secure
     */
    defaultDataCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Auth/DefaultData`,
        method: 'POST',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name ImportDataCreate
     * @request POST:/Auth/ImportData
     * @secure
     */
    importDataCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Auth/ImportData`,
        method: 'POST',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name ListUsersList
     * @request GET:/Auth/ListUsers
     * @secure
     */
    listUsersList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Auth/ListUsers`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name LoginCreate
     * @request POST:/Auth/Login
     * @secure
     */
    loginCreate: (data: UserLoginDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Auth/Login`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name RegisterCreate
     * @request POST:/Auth/Register
     * @secure
     */
    registerCreate: (data: UserRegistrationDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Auth/Register`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name ResetPasswordCreate
     * @request POST:/Auth/ResetPassword
     * @secure
     */
    resetPasswordCreate: (data: UserRegistrationDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Auth/ResetPassword`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name BotTestList
     * @request GET:/Auth/BotTest
     * @secure
     */
    botTestList: (
      query?: {
        msg?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/Auth/BotTest`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      })
  };
  fbPos = {
    /**
     * No description
     *
     * @tags FbPos
     * @name GetDbSettingList
     * @request GET:/FbPos/GetDbSetting
     * @secure
     */
    getDbSettingList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/FbPos/GetDbSetting`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name ListPaymentMeansList
     * @request GET:/FbPos/ListPaymentMeans
     * @secure
     */
    listPaymentMeansList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/FbPos/ListPaymentMeans`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name ListCustomersList
     * @request GET:/FbPos/ListCustomers
     * @secure
     */
    listCustomersList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/FbPos/ListCustomers`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name ListItemsList
     * @request GET:/FbPos/ListItems
     * @secure
     */
    listItemsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/FbPos/ListItems`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name ListQuickPickList
     * @request GET:/FbPos/ListQuickPick
     * @secure
     */
    listQuickPickList: (
      query?: {
        /** @format int32 */
        id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/ListQuickPick`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name FindInvoiceList
     * @request GET:/FbPos/FindInvoice
     * @secure
     */
    findInvoiceList: (
      query?: {
        docNum?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/FindInvoice`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name ListLastInvoicesList
     * @request GET:/FbPos/ListLastInvoices
     * @secure
     */
    listLastInvoicesList: (
      query?: {
        /** @format int32 */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/ListLastInvoices`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name ListOpenInvoicesList
     * @request GET:/FbPos/ListOpenInvoices
     * @secure
     */
    listOpenInvoicesList: (
      query?: {
        /** @format int32 */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/ListOpenInvoices`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name GetInvoiceByDocNumList
     * @request GET:/FbPos/GetInvoiceByDocNum
     * @secure
     */
    getInvoiceByDocNumList: (
      query?: {
        docNum?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/GetInvoiceByDocNum`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name GetInvoiceIdList
     * @request GET:/FbPos/GetInvoiceId
     * @secure
     */
    getInvoiceIdList: (
      query?: {
        /** @format int64 */
        Id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/GetInvoiceId`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name SaveInvoiceCreate
     * @request POST:/FbPos/SaveInvoice
     * @secure
     */
    saveInvoiceCreate: (data: Invoice, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/FbPos/SaveInvoice`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name SaveInvoiceWithHookCreate
     * @request POST:/FbPos/SaveInvoiceWithHook
     * @secure
     */
    saveInvoiceWithHookCreate: (
      data: Invoice,
      query?: {
        /** @format int32 */
        otp?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/SaveInvoiceWithHook`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name CallToWaiterCreate
     * @request POST:/FbPos/CallToWaiter
     * @secure
     */
    callToWaiterCreate: (
      query?: {
        /** @format int64 */
        tableNo?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/CallToWaiter`,
        method: 'POST',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name GetOrderPicDetail
     * @request GET:/FbPos/GetOrderPic/{id}
     * @secure
     */
    getOrderPicDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/FbPos/GetOrderPic/${id}`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name DownloadReceiptDetail
     * @request GET:/FbPos/DownloadReceipt/{id}
     * @secure
     */
    downloadReceiptDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/FbPos/DownloadReceipt/${id}`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name UpoadCreate
     * @request POST:/FbPos/Upoad
     * @secure
     */
    upoadCreate: (
      data: {
        /** @format binary */
        file?: File;
      },
      query?: {
        itemCode?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/Upoad`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name SendOtpCreate
     * @request POST:/FbPos/SendOTP
     * @secure
     */
    sendOtpCreate: (
      query?: {
        mobileNo?: string;
        /** @format int64 */
        orderId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/SendOTP`,
        method: 'POST',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name SalesSummaryList
     * @request GET:/FbPos/SalesSummary
     * @secure
     */
    salesSummaryList: (
      query?: {
        /** @format date-time */
        startDate?: string;
        /** @format date-time */
        endDate?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/SalesSummary`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name SalesDetailList
     * @request GET:/FbPos/SalesDetail
     * @secure
     */
    salesDetailList: (
      query?: {
        /** @format date-time */
        startDate?: string;
        /** @format date-time */
        endDate?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/SalesDetail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name SalesByItemList
     * @request GET:/FbPos/SalesByItem
     * @secure
     */
    salesByItemList: (
      query?: {
        /** @format date-time */
        startDate?: string;
        /** @format date-time */
        endDate?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/SalesByItem`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name AddQuickPickGroupCreate
     * @request POST:/FbPos/AddQuickPickGroup
     * @secure
     */
    addQuickPickGroupCreate: (data: QuickPickGroup, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/FbPos/AddQuickPickGroup`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name AddQuickPickItemCreate
     * @request POST:/FbPos/AddQuickPickItem
     * @secure
     */
    addQuickPickItemCreate: (
      query?: {
        itemCode?: string;
        /** @format int64 */
        groupId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/AddQuickPickItem`,
        method: 'POST',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name RemoveQuickPickItemCreate
     * @request POST:/FbPos/RemoveQuickPickItem
     * @secure
     */
    removeQuickPickItemCreate: (
      query?: {
        itemCode?: string;
        /** @format int64 */
        groupId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/RemoveQuickPickItem`,
        method: 'POST',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FbPos
     * @name GetCreditBillsCreate
     * @request POST:/FbPos/GetCreditBills
     * @secure
     */
    getCreditBillsCreate: (
      query?: {
        /** @format int64 */
        customerId?: number;
        /** @format int64 */
        paymentMeanId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/FbPos/GetCreditBills`,
        method: 'POST',
        query: query,
        secure: true,
        ...params
      })
  };
  log = {
    /**
     * No description
     *
     * @tags Log
     * @name AddUserActionLogCreate
     * @request POST:/Log/AddUserActionLog
     * @secure
     */
    addUserActionLogCreate: (data: UserActionLog, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Log/AddUserActionLog`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      })
  };
  masterData = {
    /**
     * No description
     *
     * @tags MasterData
     * @name AddCustomerCreate
     * @request POST:/MasterData/AddCustomer
     * @secure
     */
    addCustomerCreate: (data: Customer, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/MasterData/AddCustomer`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags MasterData
     * @name AddNewCustomerByPhoneCreate
     * @request POST:/MasterData/AddNewCustomerByPhone
     * @secure
     */
    addNewCustomerByPhoneCreate: (
      query?: {
        phoneNum?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/MasterData/AddNewCustomerByPhone`,
        method: 'POST',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags MasterData
     * @name AddItemCreate
     * @request POST:/MasterData/AddItem
     * @secure
     */
    addItemCreate: (data: Item, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/MasterData/AddItem`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      })
  };
}

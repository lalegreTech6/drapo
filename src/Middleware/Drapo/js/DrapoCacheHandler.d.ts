declare class DrapoCacheHandler {
    private _application;
    private _hasLocalStorage;
    private _useLocalStorage;
    private _applicationBuild;
    private _cacheKeysView;
    private _cacheKeysComponentView;
    private _cacheKeysComponentStyle;
    private _cacheKeysComponentScript;
    private readonly TYPE_DATA;
    private readonly TYPE_COMPONENTVIEW;
    private readonly TYPE_COMPONENTSTYLE;
    private readonly TYPE_COMPONENTSCRIPT;
    private readonly TYPE_VIEW;
    private get Application();
    private get CanUseLocalStorage();
    constructor(application: DrapoApplication);
    Initialize(): Promise<boolean>;
    EnsureLoaded(storageItem: DrapoStorageItem, sector: string, dataKey: string, dataPath?: string[]): boolean;
    GetCachedData(cacheKeys: string[], sector: string, dataKey: string): any[];
    GetCachedDataPath(cacheKeys: string[], sector: string, dataKey: string, dataPath: string[]): any;
    AppendCacheData(cacheKeys: string[], sector: string, dataKey: string, value: any, isDelay?: boolean): boolean;
    GetCachedView(url: string): string;
    SetCachedView(url: string, value: string): boolean;
    GetCachedComponentView(url: string): string;
    SetCachedComponentView(url: string, value: string): boolean;
    private GetConfigurationKeys;
    private AppendCacheDataEntry;
    private CreateCacheKey;
    private GetKey;
    private AppendStorageDataCache;
    private GetClientDataCache;
    private SetClientDataCache;
}

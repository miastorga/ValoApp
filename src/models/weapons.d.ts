export type Data = {
  uuid: string;
  displayName: string; // localized
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: {
    fireRate: number; // single
    magazineSize: number; // int32
    runSpeedMultiplier: number; // single
    equipTimeSeconds: number; // single
    reloadTimeSeconds: number; // single
    firstBulletAccuracy: number; // single
    shotgunPelletCount: number; // int32
    wallPenetration: string;
    feature: string;
    fireMode: string;
    altFireType: string;
    adsStats: {
      zoomMultiplier: number; // single
      fireRate: number; // single
      runSpeedMultiplier: number; // single
      burstCount: number; // int32
      firstBulletAccuracy: number; // single
    };
    altShotgunStats: {
      shotgunPelletCount: number; // int32
      burstRate: number; // single
    };
    airBurstStats: {
      shotgunPelletCount: number; // int32
      burstDistance: number; // single
    };
    damageRanges: {
      rangeStartMeters: number; // single
      rangeEndMeters: number; // single
      headDamage: number; // single
      bodyDamage: number; // single
      legDamage: number; // single
    }[];
  };
  shopData: {
    cost: number; // int32
    category: string;
    categoryText: string; // localized
    gridPosition: {
      row: number; // int32
      column: number; // int32
    };
    canBeTrashed: boolean;
    image: string;
    newImage: string;
    newImage2: string;
    assetPath: string;
  };
  skins: {
    uuid: string;
    displayName: string; // localized
    themeUuid: string;
    contentTierUuid: string;
    displayIcon: string;
    wallpaper: string;
    assetPath: string;
    chromas: {
      uuid: string;
      displayName: string; // localized
      displayIcon: string;
      fullRender: string;
      swatch: string;
      streamedVideo: string;
      assetPath: string;
    }[];
    levels: {
      uuid: string;
      displayName: string; // localized
      levelItem: string;
      displayIcon: string;
      streamedVideo: string;
      assetPath: string;
    }[];
  }[];
};

type Response = {
  status: number; // int32
  data: Data[];
};

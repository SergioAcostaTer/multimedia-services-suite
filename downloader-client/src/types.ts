export interface Result {
  originalQuery:  string;
  correctedQuery: string;
  results:        number;
  activeFilters:  ActiveFilter[];
  refinements:    any[];
  items:          Item[];
  continuation:   null;
}

export interface ActiveFilter {
  name:        string;
  active:      boolean;
  url:         null;
  description: string;
}

export interface Item {
  type:          string;
  title:         string;
  id:            string;
  url:           string;
  bestThumbnail: BestThumbnail;
  thumbnails:    BestThumbnail[];
  isUpcoming:    boolean;
  upcoming:      null;
  isLive:        boolean;
  badges:        any[];
  author:        Author;
  description:   null;
  views:         number;
  duration:      string;
  uploadedAt:    string;
  qualities:     string[];
}

export interface Author {
  name:        string;
  channelID:   string;
  url:         string;
  bestAvatar:  BestThumbnail;
  avatars:     BestThumbnail[];
  ownerBadges: string[];
  verified:    boolean;
}

export interface BestThumbnail {
  url:    string;
  width:  number;
  height: number;
}

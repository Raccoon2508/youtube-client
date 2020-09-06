interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface Item {
    kind: string;
    etag: string;
    id: {
        kind: string;
        videoId: string
    };
}

export interface YoutubeSearchListResponse {
  kind: string;
  etag: string;
  naxtPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

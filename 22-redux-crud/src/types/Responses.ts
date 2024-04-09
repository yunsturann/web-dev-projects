export interface MessageResponse {
  message: string;
}

export interface PayloadResponse {
  payload: MessageResponse;
}

export interface PayloadResponseWithId {
  payload: {
    message: string;
    _id: string;
  };
}

// src/types/item.ts

export interface Item {
	actionType: string;
	itemDetails: {
		QRCode: string;
		collectionName: string;
		createdAt: string;
		description: string;
		photos: string[];
		priceRange: {
			max: number;
			min: number;
		};
		title: string;
		updatedAt: string;
	};
	userID: string;
}
export type ItemDetails = Item['itemDetails'];
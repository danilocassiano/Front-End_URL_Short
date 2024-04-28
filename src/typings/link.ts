export interface ILinkCreate {
	original: string
	ative: boolean
}

export interface ILinkUpdate {
	original?: string
	ative?: boolean
}

export interface ILink {
	id: string
	clicks: number
	qrCode: string
	original: string
	hash: string
	ative: boolean
}
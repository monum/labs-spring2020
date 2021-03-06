import { ILink } from "../model/link";

export interface IFaqContent {
    pageHeader: string;
    furtherQuestionHeader: string;
    furtherHelpHeader: string;
    furtherHelpEmail: string;
    faqs: IFaq[];
}

export interface IFaq { 
    title: string;
    suggestions?: string[];
    description?: string;
    links: IFaqLink[];
}

export interface IFaqLink {
    url: ILink;
    description: string;
}

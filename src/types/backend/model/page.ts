import { wrap } from ".";
import { Entry, IEntry, ILink, isEntry, ISys } from "../base";
import { IConnectionGuideContent, ConnectionGuideContent } from "./connection_guide_content";
import { IFaqPageContent, FaqPageContent } from "./faq_page_content";
import { IHomePageContent, HomePageContent } from "./home_page_content";
import { INotFoundPageContent, NotFoundPageContent, } from "./not_found_page_content";
import { IProfilePageContent, ProfilePageContent, } from "./profile_page_content";
import { ISearchPageContent, SearchPageContent,} from "./search_page_content";
import { ITeacherPageContent, TeacherPageContent,} from "./teacher_page_content";

export interface IPageFields {
  pageName?: string;
  pageEndpoint?: string;
  pageContent?: ILink<'Entry'> | PagePageContent;
}

/* 

This is used to allow us to determine what kind of content a given PageContent type actually is. 
Each page content type has a shared field called "kind", with a value corresponding to one of these
discriminators.

More info: www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions

*/
export enum PageDiscriminator {
  HOME="Home Page",
  CONVERSATION_GUIDE="Conversation Guide",
  FAQ="FAQ Page",
  PROFILE="Profile Page",
  SEARCH="Search Page",
  NOT_FOUND="Not Found Page",
  TEACHER="Teacher Page"
}

export type PagePageContent = INotFoundPageContent | IConnectionGuideContent | IFaqPageContent | IHomePageContent | IProfilePageContent | ISearchPageContent | ITeacherPageContent;
export type PagePageContentClass = NotFoundPageContent | ConnectionGuideContent | FaqPageContent | HomePageContent | ProfilePageContent | SearchPageContent | TeacherPageContent;

/**
 * Page
 * This is used to identify all of the pages on the site. Links together pages with an ID, URL, and Content.
 */
export interface IPage extends IEntry<IPageFields> {
}

export function isPage(entry: IEntry<any>): entry is IPage {
  return entry &&
    entry.sys &&
    entry.sys.contentType &&
    entry.sys.contentType.sys &&
    entry.sys.contentType.sys.id === 'page'
}

export class Page extends Entry<IPageFields> implements IPage {
  public readonly sys!: ISys<'Entry'>;
  public readonly fields!: IPageFields;

  get pageName(): string | undefined {
    return this.fields.pageName
  }

  get page_name(): string | undefined {
    return this.fields.pageName
  }

  get pageEndpoint(): string | undefined {
    return this.fields.pageEndpoint
  }

  get page_endpoint(): string | undefined {
    return this.fields.pageEndpoint
  }

  get pageContent(): PagePageContentClass | null | undefined {
    return !this.fields.pageContent ? undefined :
      (isEntry(this.fields.pageContent) ? wrap<'notFoundPageContent' | 'connectionGuideContent' | 'faqPageContent' | 'homePageContent' | 'profilePageContent' | 'searchPageContent' | 'teacherPageContent'>(this.fields.pageContent) : null)
  }

  get page_content(): PagePageContentClass | null | undefined {
    return !this.fields.pageContent ? undefined :
      (isEntry(this.fields.pageContent) ? wrap<'notFoundPageContent' | 'connectionGuideContent' | 'faqPageContent' | 'homePageContent' | 'profilePageContent' | 'searchPageContent' | 'teacherPageContent'>(this.fields.pageContent) : null)
  }

  constructor(entry: IPage);
  constructor(id: string, fields: IPageFields);
  constructor(entryOrId: IPage | string, fields?: IPageFields) {
    super(entryOrId, 'page', fields)
  }
}

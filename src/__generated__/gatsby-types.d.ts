/* eslint-disable */


declare namespace GatsbyTypes {

type Maybe<T> = T | null;
type InputMaybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  Decoupla_Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

type Decoupla = {
  readonly allAuthor: Maybe<Decoupla_AuthorConnection>;
  readonly allBlogPost: Maybe<Decoupla_BlogPostConnection>;
  readonly allCategory: Maybe<Decoupla_CategoryConnection>;
  readonly author: Maybe<Decoupla_AuthorNode>;
  readonly blogPost: Maybe<Decoupla_BlogPostNode>;
  readonly category: Maybe<Decoupla_CategoryNode>;
};


type Decoupla_allAuthorArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filters: InputMaybe<Decoupla_AuthorFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<Decoupla_AuthorSorting>>;
};


type Decoupla_allBlogPostArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filters: InputMaybe<Decoupla_BlogPostFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<Decoupla_BlogPostSorting>>;
};


type Decoupla_allCategoryArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filters: InputMaybe<Decoupla_CategoryFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<Decoupla_CategorySorting>>;
};


type Decoupla_authorArgs = {
  filters: InputMaybe<Decoupla_AuthorFilter>;
};


type Decoupla_blogPostArgs = {
  filters: InputMaybe<Decoupla_BlogPostFilter>;
};


type Decoupla_categoryArgs = {
  filters: InputMaybe<Decoupla_CategoryFilter>;
};

type Decoupla_Author = {
  readonly avatar: Maybe<Decoupla_Image>;
  readonly bio: Maybe<Decoupla_TextContent>;
  readonly fullName: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
};

type Decoupla_AuthorConnection = {
  readonly count: Scalars['Int'];
  readonly edges: Maybe<ReadonlyArray<Maybe<Decoupla_AuthorEdge>>>;
  readonly pageInfo: Decoupla_PageInfo;
};

type Decoupla_AuthorEdge = {
  readonly cursor: Maybe<Scalars['String']>;
  readonly node: Maybe<Decoupla_Author>;
};

type Decoupla_AuthorFilter = {
  readonly and: InputMaybe<ReadonlyArray<Decoupla_AuthorFilter>>;
  readonly fullName: InputMaybe<Decoupla_StringFilter>;
  readonly id: InputMaybe<Decoupla_IdFilter>;
  readonly or: InputMaybe<ReadonlyArray<Decoupla_AuthorFilter>>;
};

type Decoupla_AuthorNode = {
  readonly node: Maybe<Decoupla_Author>;
};

type Decoupla_AuthorSorting = {
  readonly direction: InputMaybe<Decoupla_SortingDirection>;
  readonly field: Decoupla_AuthorSortingFields;
};

type Decoupla_AuthorSortingFields =
  | 'fullName'
  | 'none';

type Decoupla_BlogPost = {
  readonly author: Maybe<Decoupla_BlogPostAuthorUnion>;
  readonly category: Maybe<Decoupla_BlogPostCategoryUnion>;
  readonly content: Maybe<Decoupla_TextContent>;
  readonly datePublished: Maybe<Scalars['Decoupla_Date']>;
  readonly id: Scalars['String'];
  readonly slug: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly thumbnail: Maybe<Decoupla_Image>;
  readonly title: Maybe<Scalars['String']>;
};


type Decoupla_BlogPost_authorArgs = {
  authorFilter: InputMaybe<Decoupla_AuthorFilter>;
};


type Decoupla_BlogPost_categoryArgs = {
  categoryFilter: InputMaybe<Decoupla_CategoryFilter>;
};

type Decoupla_BlogPostAuthorUnion = Decoupla_Author;

type Decoupla_BlogPostCategoryUnion = Decoupla_Category;

type Decoupla_BlogPostConnection = {
  readonly count: Scalars['Int'];
  readonly edges: Maybe<ReadonlyArray<Maybe<Decoupla_BlogPostEdge>>>;
  readonly pageInfo: Decoupla_PageInfo;
};

type Decoupla_BlogPostEdge = {
  readonly cursor: Maybe<Scalars['String']>;
  readonly node: Maybe<Decoupla_BlogPost>;
};

type Decoupla_BlogPostFilter = {
  readonly and: InputMaybe<ReadonlyArray<Decoupla_BlogPostFilter>>;
  readonly authorAuthorFilter: InputMaybe<Decoupla_AuthorFilter>;
  readonly categoryCategoryFilter: InputMaybe<Decoupla_CategoryFilter>;
  readonly datePublished: InputMaybe<Decoupla_DateFilter>;
  readonly id: InputMaybe<Decoupla_IdFilter>;
  readonly or: InputMaybe<ReadonlyArray<Decoupla_BlogPostFilter>>;
  readonly slug: InputMaybe<Decoupla_StringFilter>;
  readonly tags: InputMaybe<Decoupla_StringArrayFilter>;
  readonly title: InputMaybe<Decoupla_StringFilter>;
};

type Decoupla_BlogPostNode = {
  readonly node: Maybe<Decoupla_BlogPost>;
};

type Decoupla_BlogPostSorting = {
  readonly direction: InputMaybe<Decoupla_SortingDirection>;
  readonly field: Decoupla_BlogPostSortingFields;
};

type Decoupla_BlogPostSortingFields =
  | 'datePublished'
  | 'none'
  | 'slug'
  | 'title';

type Decoupla_Category = {
  readonly description: Maybe<Decoupla_TextContent>;
  readonly id: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
};

type Decoupla_CategoryConnection = {
  readonly count: Scalars['Int'];
  readonly edges: Maybe<ReadonlyArray<Maybe<Decoupla_CategoryEdge>>>;
  readonly pageInfo: Decoupla_PageInfo;
};

type Decoupla_CategoryEdge = {
  readonly cursor: Maybe<Scalars['String']>;
  readonly node: Maybe<Decoupla_Category>;
};

type Decoupla_CategoryFilter = {
  readonly and: InputMaybe<ReadonlyArray<Decoupla_CategoryFilter>>;
  readonly id: InputMaybe<Decoupla_IdFilter>;
  readonly name: InputMaybe<Decoupla_StringFilter>;
  readonly or: InputMaybe<ReadonlyArray<Decoupla_CategoryFilter>>;
  readonly slug: InputMaybe<Decoupla_StringFilter>;
};

type Decoupla_CategoryNode = {
  readonly node: Maybe<Decoupla_Category>;
};

type Decoupla_CategorySorting = {
  readonly direction: InputMaybe<Decoupla_SortingDirection>;
  readonly field: Decoupla_CategorySortingFields;
};

type Decoupla_CategorySortingFields =
  | 'name'
  | 'none'
  | 'slug';

type Decoupla_DateFilter = {
  readonly between: InputMaybe<Decoupla_DateRange>;
  readonly eq: InputMaybe<Scalars['Decoupla_Date']>;
  readonly gt: InputMaybe<Scalars['Decoupla_Date']>;
  readonly gte: InputMaybe<Scalars['Decoupla_Date']>;
  readonly isNotNull: InputMaybe<Scalars['Boolean']>;
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  readonly lt: InputMaybe<Scalars['Decoupla_Date']>;
  readonly lte: InputMaybe<Scalars['Decoupla_Date']>;
  readonly notEq: InputMaybe<Scalars['Decoupla_Date']>;
  readonly outside: InputMaybe<Decoupla_DateRange>;
};

type Decoupla_DateRange = {
  readonly lower: Scalars['Decoupla_Date'];
  readonly upper: Scalars['Decoupla_Date'];
};

type Decoupla_IdFilter = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly notEq: InputMaybe<Scalars['String']>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

type Decoupla_Image = {
  readonly byteSize: Scalars['Int'];
  readonly format: Decoupla_ImageFormat;
  readonly height: Scalars['Int'];
  readonly id: Scalars['String'];
  readonly output: Decoupla_ImageOutput;
  readonly width: Scalars['Int'];
};


type Decoupla_Image_outputArgs = {
  format: InputMaybe<Decoupla_ImageFormat>;
  height: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

/** Image format */
type Decoupla_ImageFormat =
  /** AVIF */
  | 'AVIF'
  /** JPEG */
  | 'JPG'
  /** PNG */
  | 'PNG'
  /** SVG */
  | 'SVG'
  /** WEBP */
  | 'WEBP';

type Decoupla_ImageOutput = {
  readonly base64: Scalars['String'];
  readonly byteSize: Scalars['Int'];
  readonly format: Decoupla_ImageFormat;
  readonly height: Scalars['Int'];
  readonly id: Scalars['String'];
  readonly url: Scalars['String'];
  readonly width: Scalars['Int'];
};

type Decoupla_MarkdownContent = {
  readonly html: Maybe<Scalars['String']>;
};

type Decoupla_PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

type Decoupla_SortingDirection =
  | 'ASC'
  | 'DESC';

type Decoupla_StringArrayFilter = {
  readonly any: InputMaybe<Decoupla_StringFilter>;
  readonly every: InputMaybe<Decoupla_StringFilter>;
  readonly none: InputMaybe<Decoupla_StringFilter>;
};

type Decoupla_StringFilter = {
  readonly contains: InputMaybe<Scalars['String']>;
  readonly endsWith: InputMaybe<Scalars['String']>;
  readonly eq: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly isNotNull: InputMaybe<Scalars['Boolean']>;
  readonly isNull: InputMaybe<Scalars['Boolean']>;
  readonly notContains: InputMaybe<Scalars['String']>;
  readonly notEndsWith: InputMaybe<Scalars['String']>;
  readonly notEq: InputMaybe<Scalars['String']>;
  readonly notIn: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly notStartsWith: InputMaybe<Scalars['String']>;
  readonly startsWith: InputMaybe<Scalars['String']>;
};

type Decoupla_TextContent = {
  readonly content: Maybe<Scalars['String']>;
  readonly fromMarkdown: Decoupla_MarkdownContent;
};

type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type Directory_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectorySortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

type FieldSelectorEnum =
  | 'SELECT';

type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type File_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileConnection_minArgs = {
  field: FileFieldSelector;
};


type FileConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_minArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileSortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

type GraphQLSource = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type GraphQLSourceConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type GraphQLSourceConnection_distinctArgs = {
  field: GraphQLSourceFieldSelector;
};


type GraphQLSourceConnection_groupArgs = {
  field: GraphQLSourceFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type GraphQLSourceConnection_maxArgs = {
  field: GraphQLSourceFieldSelector;
};


type GraphQLSourceConnection_minArgs = {
  field: GraphQLSourceFieldSelector;
};


type GraphQLSourceConnection_sumArgs = {
  field: GraphQLSourceFieldSelector;
};

type GraphQLSourceEdge = {
  readonly next: Maybe<GraphQLSource>;
  readonly node: GraphQLSource;
  readonly previous: Maybe<GraphQLSource>;
};

type GraphQLSourceFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type GraphQLSourceFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type GraphQLSourceGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type GraphQLSourceGroupConnection_distinctArgs = {
  field: GraphQLSourceFieldSelector;
};


type GraphQLSourceGroupConnection_groupArgs = {
  field: GraphQLSourceFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type GraphQLSourceGroupConnection_maxArgs = {
  field: GraphQLSourceFieldSelector;
};


type GraphQLSourceGroupConnection_minArgs = {
  field: GraphQLSourceFieldSelector;
};


type GraphQLSourceGroupConnection_sumArgs = {
  field: GraphQLSourceFieldSelector;
};

type GraphQLSourceSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly contentFilePath: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFieldSelector = {
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly contentDigest: InputMaybe<FieldSelectorEnum>;
  readonly contentFilePath: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly fieldOwners: InputMaybe<FieldSelectorEnum>;
  readonly ignoreType: InputMaybe<FieldSelectorEnum>;
  readonly mediaType: InputMaybe<FieldSelectorEnum>;
  readonly owner: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly contentFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type InternalSortInput = {
  readonly content: InputMaybe<SortOrderEnum>;
  readonly contentDigest: InputMaybe<SortOrderEnum>;
  readonly contentFilePath: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly fieldOwners: InputMaybe<SortOrderEnum>;
  readonly ignoreType: InputMaybe<SortOrderEnum>;
  readonly mediaType: InputMaybe<SortOrderEnum>;
  readonly owner: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type JSONQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type NodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

type NodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Query = {
  readonly Decoupla: Decoupla;
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allGraphQlSource: GraphQLSourceConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly graphQlSource: Maybe<GraphQLSource>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
};


type Query_allDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<DirectorySortInput>>>;
};


type Query_allFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FileSortInput>>>;
};


type Query_allGraphQlSourceArgs = {
  filter: InputMaybe<GraphQLSourceFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<GraphQLSourceSortInput>>>;
};


type Query_allSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteSortInput>>>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataSortInput>>>;
};


type Query_allSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionSortInput>>>;
};


type Query_allSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePageSortInput>>>;
};


type Query_allSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePluginSortInput>>>;
};


type Query_directoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_fileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_graphQlSourceArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<SiteGraphqlTypegenFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


type Query_sitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


type Query_sitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly graphqlTypegen: Maybe<SiteGraphqlTypegen>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


type Site_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


type SiteBuildMetadata_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenFieldSelector>;
  readonly host: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly jsxRuntime: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pathPrefix: InputMaybe<FieldSelectorEnum>;
  readonly polyfill: InputMaybe<FieldSelectorEnum>;
  readonly port: InputMaybe<FieldSelectorEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFieldSelector>;
  readonly trailingSlash: InputMaybe<FieldSelectorEnum>;
};

type SiteFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldSelector = {
  readonly absoluteCompiledFilePath: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly functionRoute: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<FieldSelectorEnum>;
  readonly originalRelativeFilePath: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginName: InputMaybe<FieldSelectorEnum>;
  readonly relativeCompiledFilePath: InputMaybe<FieldSelectorEnum>;
};

type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionSortInput = {
  readonly absoluteCompiledFilePath: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly functionRoute: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<SortOrderEnum>;
  readonly originalRelativeFilePath: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginName: InputMaybe<SortOrderEnum>;
  readonly relativeCompiledFilePath: InputMaybe<SortOrderEnum>;
};

type SiteGraphqlTypegen = {
  readonly documentSearchPaths: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly generateOnBuild: Maybe<Scalars['Boolean']>;
  readonly typesOutputPath: Maybe<Scalars['String']>;
};

type SiteGraphqlTypegenFieldSelector = {
  readonly documentSearchPaths: InputMaybe<FieldSelectorEnum>;
  readonly generateOnBuild: InputMaybe<FieldSelectorEnum>;
  readonly typesOutputPath: InputMaybe<FieldSelectorEnum>;
};

type SiteGraphqlTypegenFilterInput = {
  readonly documentSearchPaths: InputMaybe<StringQueryOperatorInput>;
  readonly generateOnBuild: InputMaybe<BooleanQueryOperatorInput>;
  readonly typesOutputPath: InputMaybe<StringQueryOperatorInput>;
};

type SiteGraphqlTypegenSortInput = {
  readonly documentSearchPaths: InputMaybe<SortOrderEnum>;
  readonly generateOnBuild: InputMaybe<SortOrderEnum>;
  readonly typesOutputPath: InputMaybe<SortOrderEnum>;
};

type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly component: InputMaybe<FieldSelectorEnum>;
  readonly componentChunkName: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly internalComponentName: InputMaybe<FieldSelectorEnum>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly pageContext: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly path: InputMaybe<FieldSelectorEnum>;
  readonly pluginCreator: InputMaybe<SitePluginFieldSelector>;
};

type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly component: InputMaybe<SortOrderEnum>;
  readonly componentChunkName: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly internalComponentName: InputMaybe<SortOrderEnum>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly pageContext: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly path: InputMaybe<SortOrderEnum>;
  readonly pluginCreator: InputMaybe<SitePluginSortInput>;
};

type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldSelector = {
  readonly browserAPIs: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeAPIs: InputMaybe<FieldSelectorEnum>;
  readonly packageJson: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginFilepath: InputMaybe<FieldSelectorEnum>;
  readonly pluginOptions: InputMaybe<FieldSelectorEnum>;
  readonly resolve: InputMaybe<FieldSelectorEnum>;
  readonly ssrAPIs: InputMaybe<FieldSelectorEnum>;
  readonly version: InputMaybe<FieldSelectorEnum>;
};

type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginSortInput = {
  readonly browserAPIs: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeAPIs: InputMaybe<SortOrderEnum>;
  readonly packageJson: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginFilepath: InputMaybe<SortOrderEnum>;
  readonly pluginOptions: InputMaybe<SortOrderEnum>;
  readonly resolve: InputMaybe<SortOrderEnum>;
  readonly ssrAPIs: InputMaybe<SortOrderEnum>;
  readonly version: InputMaybe<SortOrderEnum>;
};

type SiteSiteMetadata = {
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFieldSelector = {
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly siteUrl: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type SiteSiteMetadataFilterInput = {
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSortInput = {
  readonly description: InputMaybe<SortOrderEnum>;
  readonly siteUrl: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type SiteSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly graphqlTypegen: InputMaybe<SiteGraphqlTypegenSortInput>;
  readonly host: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly jsxRuntime: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pathPrefix: InputMaybe<SortOrderEnum>;
  readonly polyfill: InputMaybe<SortOrderEnum>;
  readonly port: InputMaybe<SortOrderEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataSortInput>;
  readonly trailingSlash: InputMaybe<SortOrderEnum>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};

type AuthorCardFragment = { readonly id: string, readonly fullName: string | null, readonly bio: { readonly content: string | null } | null, readonly avatarSmall: { readonly output: { readonly url: string } } | null, readonly avatarMedium: { readonly output: { readonly url: string } } | null };

type BlogCardFragment = { readonly id: string, readonly slug: string | null, readonly title: string | null, readonly datePublished: any | null, readonly thumbnail: { readonly output: { readonly url: string } } | null, readonly author: { readonly id: string, readonly fullName: string | null, readonly bio: { readonly content: string | null } | null, readonly avatarSmall: { readonly output: { readonly url: string } } | null, readonly avatarMedium: { readonly output: { readonly url: string } } | null } | null };

type BlogArticleQueryVariables = Exact<{
  blogPostId: Scalars['String'];
}>;


type BlogArticleQuery = { readonly Decoupla: { readonly blogPost: { readonly node: { readonly id: string, readonly title: string | null, readonly tags: ReadonlyArray<string | null> | null, readonly thumbnail: { readonly output: { readonly url: string } } | null, readonly content: { readonly htmlContent: string | null } | null, readonly author: { readonly id: string, readonly fullName: string | null, readonly bio: { readonly content: string | null } | null, readonly avatarSmall: { readonly output: { readonly url: string } } | null, readonly avatarMedium: { readonly output: { readonly url: string } } | null } | null } | null } | null } };

type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


type HomePageQuery = { readonly Decoupla: { readonly allBlogPost: { readonly edges: ReadonlyArray<{ readonly node: { readonly id: string, readonly slug: string | null, readonly datePublished: any | null, readonly title: string | null, readonly thumbnail: { readonly output: { readonly url: string } } | null, readonly author: { readonly id: string, readonly fullName: string | null, readonly bio: { readonly content: string | null } | null, readonly avatarSmall: { readonly output: { readonly url: string } } | null, readonly avatarMedium: { readonly output: { readonly url: string } } | null } | null } | null } | null> | null } | null } };


}

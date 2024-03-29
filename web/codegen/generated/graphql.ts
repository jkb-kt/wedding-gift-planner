import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum ApiErrors {
  UserAlreadyExists = 'UserAlreadyExists',
  Unknown = 'Unknown'
}

export type Gift = {
  __typename?: 'Gift';
  id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  currency: Currency;
  link?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  contributions: Array<GiftContribution>;
};


export type GiftContributionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<GiftContributionWhereUniqueInput>;
  after?: Maybe<GiftContributionWhereUniqueInput>;
};

export type GiftContribution = {
  __typename?: 'GiftContribution';
  id: Scalars['String'];
  amount: Scalars['Int'];
  currency: Currency;
  note?: Maybe<Scalars['String']>;
  contributor: Guest;
  gift: Gift;
};

export type UpsertGiftInput = {
  id?: Maybe<Scalars['ID']>;
  weddingId: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  currency: Currency;
  imgUrl?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type Guest = {
  __typename?: 'Guest';
  id: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  plusX: Scalars['Int'];
  plusGuests: Array<Scalars['String']>;
  status: GuestStatus;
  wedding: Wedding;
};

export type UpsertGuestInput = {
  id?: Maybe<Scalars['ID']>;
  weddingId: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  plusX?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  wedding?: Maybe<Wedding>;
  emailVerified: Scalars['Boolean'];
  verificationResendLimit: Scalars['DateTime'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Wedding = {
  __typename?: 'Wedding';
  id: Scalars['String'];
  partner1Name: Scalars['String'];
  partner2Name: Scalars['String'];
  partnersEmail?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  rsvpUntil: Scalars['DateTime'];
  location: Scalars['String'];
  gifts: Array<Gift>;
  guests: Array<Guest>;
  authors: Array<User>;
};


export type WeddingGiftsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<GiftWhereUniqueInput>;
  after?: Maybe<GiftWhereUniqueInput>;
};


export type WeddingGuestsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<GuestWhereUniqueInput>;
  after?: Maybe<GuestWhereUniqueInput>;
};


export type WeddingAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};

export type UpsertWeddingInput = {
  id?: Maybe<Scalars['ID']>;
  partner1Name: Scalars['String'];
  partner2Name: Scalars['String'];
  location: Scalars['String'];
  partnersEmail?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  rsvpUntil: Scalars['DateTime'];
};

export enum Currency {
  Eur = 'EUR',
  Usd = 'USD',
  Czk = 'CZK',
  Uah = 'UAH',
  Rub = 'RUB',
  Gbp = 'GBP',
  Huf = 'HUF',
  Aud = 'AUD',
  Nzd = 'NZD'
}

export type GiftContributionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum GuestStatus {
  Waiting = 'WAITING',
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED'
}


export type GiftWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type GuestWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  gifts: Array<Gift>;
  gift?: Maybe<Gift>;
  guests: Array<Guest>;
  guest?: Maybe<Guest>;
  guestInvitation?: Maybe<Guest>;
  me?: Maybe<User>;
  wedding?: Maybe<Wedding>;
};


export type QueryGiftArgs = {
  id: Scalars['ID'];
};


export type QueryGuestArgs = {
  id: Scalars['ID'];
};


export type QueryGuestInvitationArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  upsertGift: Gift;
  upsertGuest: Guest;
  respondToInvitation: Guest;
  register: User;
  providerRegister?: Maybe<User>;
  verifyEmail: Scalars['Boolean'];
  resendVerificationEmail: Scalars['Boolean'];
  upsertWedding: Wedding;
  invitePartner: Scalars['Boolean'];
};


export type MutationUpsertGiftArgs = {
  input: UpsertGiftInput;
};


export type MutationUpsertGuestArgs = {
  input: UpsertGuestInput;
};


export type MutationRespondToInvitationArgs = {
  id: Scalars['ID'];
  status: GuestStatus;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationVerifyEmailArgs = {
  email: Scalars['String'];
};


export type MutationUpsertWeddingArgs = {
  input: UpsertWeddingInput;
};


export type MutationInvitePartnerArgs = {
  email: Scalars['String'];
};

export type MeInfoFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'emailVerified' | 'verificationResendLimit'>
);

export type GuestInfoFragment = (
  { __typename?: 'Guest' }
  & Pick<Guest, 'id' | 'firstName' | 'lastName' | 'status' | 'plusX' | 'plusGuests'>
);

export type WeddingInfoFragment = (
  { __typename?: 'Wedding' }
  & Pick<Wedding, 'id' | 'partner1Name' | 'partner2Name' | 'location' | 'partnersEmail' | 'date' | 'rsvpUntil'>
  & { authors: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type ContributionInfoFragment = (
  { __typename?: 'GiftContribution' }
  & Pick<GiftContribution, 'id' | 'amount' | 'currency' | 'note'>
  & { contributor: (
    { __typename?: 'Guest' }
    & Pick<Guest, 'id' | 'firstName' | 'lastName'>
  ) }
);

export type GiftInfoFragment = (
  { __typename?: 'Gift' }
  & Pick<Gift, 'id' | 'name' | 'description' | 'price' | 'currency' | 'link' | 'imgUrl'>
  & { contributions: Array<(
    { __typename?: 'GiftContribution' }
    & ContributionInfoFragment
  )> }
);

export type ProviderRegisterMutationVariables = Exact<{ [key: string]: never; }>;


export type ProviderRegisterMutation = (
  { __typename?: 'Mutation' }
  & { providerRegister?: Maybe<(
    { __typename?: 'User' }
    & MeInfoFragment
  )> }
);

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type VerifyEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type VerifyEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'verifyEmail'>
);

export type ResendVerificationEmailMutationVariables = Exact<{ [key: string]: never; }>;


export type ResendVerificationEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resendVerificationEmail'>
);

export type UpsertWeddingMutationVariables = Exact<{
  input: UpsertWeddingInput;
}>;


export type UpsertWeddingMutation = (
  { __typename?: 'Mutation' }
  & { upsertWedding: (
    { __typename?: 'Wedding' }
    & WeddingInfoFragment
  ) }
);

export type UpsertGuestMutationVariables = Exact<{
  input: UpsertGuestInput;
}>;


export type UpsertGuestMutation = (
  { __typename?: 'Mutation' }
  & { upsertGuest: (
    { __typename?: 'Guest' }
    & GuestInfoFragment
  ) }
);

export type UpsertGiftMutationVariables = Exact<{
  input: UpsertGiftInput;
}>;


export type UpsertGiftMutation = (
  { __typename?: 'Mutation' }
  & { upsertGift: (
    { __typename?: 'Gift' }
    & GiftInfoFragment
  ) }
);

export type InvitePartnerMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type InvitePartnerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'invitePartner'>
);

export type RespondToInvitationMutationVariables = Exact<{
  id: Scalars['ID'];
  status: GuestStatus;
}>;


export type RespondToInvitationMutation = (
  { __typename?: 'Mutation' }
  & { respondToInvitation: (
    { __typename?: 'Guest' }
    & Pick<Guest, 'id' | 'status'>
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & MeInfoFragment
  )> }
);

export type WeddingQueryVariables = Exact<{ [key: string]: never; }>;


export type WeddingQuery = (
  { __typename?: 'Query' }
  & { wedding?: Maybe<(
    { __typename?: 'Wedding' }
    & WeddingInfoFragment
  )> }
);

export type GuestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GuestsQuery = (
  { __typename?: 'Query' }
  & { guests: Array<(
    { __typename?: 'Guest' }
    & GuestInfoFragment
  )> }
);

export type GuestQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GuestQuery = (
  { __typename?: 'Query' }
  & { guest?: Maybe<(
    { __typename?: 'Guest' }
    & GuestInfoFragment
  )> }
);

export type GiftsQueryVariables = Exact<{ [key: string]: never; }>;


export type GiftsQuery = (
  { __typename?: 'Query' }
  & { gifts: Array<(
    { __typename?: 'Gift' }
    & GiftInfoFragment
  )> }
);

export type GiftQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GiftQuery = (
  { __typename?: 'Query' }
  & { gift?: Maybe<(
    { __typename?: 'Gift' }
    & GiftInfoFragment
  )> }
);

export type InvitationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type InvitationQuery = (
  { __typename?: 'Query' }
  & { guestInvitation?: Maybe<(
    { __typename?: 'Guest' }
    & Pick<Guest, 'id' | 'firstName' | 'lastName' | 'status' | 'plusX' | 'plusGuests'>
    & { wedding: (
      { __typename?: 'Wedding' }
      & Pick<Wedding, 'id' | 'date' | 'rsvpUntil' | 'partner1Name' | 'partner2Name' | 'location'>
      & { gifts: Array<(
        { __typename?: 'Gift' }
        & Pick<Gift, 'id' | 'name' | 'price' | 'currency' | 'link' | 'imgUrl'>
      )> }
    ) }
  )> }
);

export const MeInfoFragmentDoc = gql`
    fragment MeInfo on User {
  id
  email
  emailVerified
  verificationResendLimit
}
    `;
export const GuestInfoFragmentDoc = gql`
    fragment GuestInfo on Guest {
  id
  firstName
  lastName
  status
  plusX
  plusGuests
}
    `;
export const WeddingInfoFragmentDoc = gql`
    fragment WeddingInfo on Wedding {
  id
  partner1Name
  partner2Name
  location
  partnersEmail
  date
  rsvpUntil
  authors {
    id
    email
  }
}
    `;
export const ContributionInfoFragmentDoc = gql`
    fragment ContributionInfo on GiftContribution {
  id
  amount
  currency
  note
  contributor {
    id
    firstName
    lastName
  }
}
    `;
export const GiftInfoFragmentDoc = gql`
    fragment GiftInfo on Gift {
  id
  name
  description
  price
  currency
  link
  imgUrl
  contributions {
    ...ContributionInfo
  }
}
    ${ContributionInfoFragmentDoc}`;
export const ProviderRegisterDocument = gql`
    mutation ProviderRegister {
  providerRegister {
    ...MeInfo
  }
}
    ${MeInfoFragmentDoc}`;
export type ProviderRegisterMutationFn = Apollo.MutationFunction<ProviderRegisterMutation, ProviderRegisterMutationVariables>;

/**
 * __useProviderRegisterMutation__
 *
 * To run a mutation, you first call `useProviderRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProviderRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [providerRegisterMutation, { data, loading, error }] = useProviderRegisterMutation({
 *   variables: {
 *   },
 * });
 */
export function useProviderRegisterMutation(baseOptions?: Apollo.MutationHookOptions<ProviderRegisterMutation, ProviderRegisterMutationVariables>) {
        return Apollo.useMutation<ProviderRegisterMutation, ProviderRegisterMutationVariables>(ProviderRegisterDocument, baseOptions);
      }
export type ProviderRegisterMutationHookResult = ReturnType<typeof useProviderRegisterMutation>;
export type ProviderRegisterMutationResult = Apollo.MutationResult<ProviderRegisterMutation>;
export type ProviderRegisterMutationOptions = Apollo.BaseMutationOptions<ProviderRegisterMutation, ProviderRegisterMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    id
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($email: String!) {
  verifyEmail(email: $email)
}
    `;
export type VerifyEmailMutationFn = Apollo.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, baseOptions);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const ResendVerificationEmailDocument = gql`
    mutation ResendVerificationEmail {
  resendVerificationEmail
}
    `;
export type ResendVerificationEmailMutationFn = Apollo.MutationFunction<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>;

/**
 * __useResendVerificationEmailMutation__
 *
 * To run a mutation, you first call `useResendVerificationEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationEmailMutation, { data, loading, error }] = useResendVerificationEmailMutation({
 *   variables: {
 *   },
 * });
 */
export function useResendVerificationEmailMutation(baseOptions?: Apollo.MutationHookOptions<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>) {
        return Apollo.useMutation<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>(ResendVerificationEmailDocument, baseOptions);
      }
export type ResendVerificationEmailMutationHookResult = ReturnType<typeof useResendVerificationEmailMutation>;
export type ResendVerificationEmailMutationResult = Apollo.MutationResult<ResendVerificationEmailMutation>;
export type ResendVerificationEmailMutationOptions = Apollo.BaseMutationOptions<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>;
export const UpsertWeddingDocument = gql`
    mutation UpsertWedding($input: UpsertWeddingInput!) {
  upsertWedding(input: $input) {
    ...WeddingInfo
  }
}
    ${WeddingInfoFragmentDoc}`;
export type UpsertWeddingMutationFn = Apollo.MutationFunction<UpsertWeddingMutation, UpsertWeddingMutationVariables>;

/**
 * __useUpsertWeddingMutation__
 *
 * To run a mutation, you first call `useUpsertWeddingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertWeddingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertWeddingMutation, { data, loading, error }] = useUpsertWeddingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertWeddingMutation(baseOptions?: Apollo.MutationHookOptions<UpsertWeddingMutation, UpsertWeddingMutationVariables>) {
        return Apollo.useMutation<UpsertWeddingMutation, UpsertWeddingMutationVariables>(UpsertWeddingDocument, baseOptions);
      }
export type UpsertWeddingMutationHookResult = ReturnType<typeof useUpsertWeddingMutation>;
export type UpsertWeddingMutationResult = Apollo.MutationResult<UpsertWeddingMutation>;
export type UpsertWeddingMutationOptions = Apollo.BaseMutationOptions<UpsertWeddingMutation, UpsertWeddingMutationVariables>;
export const UpsertGuestDocument = gql`
    mutation UpsertGuest($input: UpsertGuestInput!) {
  upsertGuest(input: $input) {
    ...GuestInfo
  }
}
    ${GuestInfoFragmentDoc}`;
export type UpsertGuestMutationFn = Apollo.MutationFunction<UpsertGuestMutation, UpsertGuestMutationVariables>;

/**
 * __useUpsertGuestMutation__
 *
 * To run a mutation, you first call `useUpsertGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertGuestMutation, { data, loading, error }] = useUpsertGuestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertGuestMutation(baseOptions?: Apollo.MutationHookOptions<UpsertGuestMutation, UpsertGuestMutationVariables>) {
        return Apollo.useMutation<UpsertGuestMutation, UpsertGuestMutationVariables>(UpsertGuestDocument, baseOptions);
      }
export type UpsertGuestMutationHookResult = ReturnType<typeof useUpsertGuestMutation>;
export type UpsertGuestMutationResult = Apollo.MutationResult<UpsertGuestMutation>;
export type UpsertGuestMutationOptions = Apollo.BaseMutationOptions<UpsertGuestMutation, UpsertGuestMutationVariables>;
export const UpsertGiftDocument = gql`
    mutation UpsertGift($input: UpsertGiftInput!) {
  upsertGift(input: $input) {
    ...GiftInfo
  }
}
    ${GiftInfoFragmentDoc}`;
export type UpsertGiftMutationFn = Apollo.MutationFunction<UpsertGiftMutation, UpsertGiftMutationVariables>;

/**
 * __useUpsertGiftMutation__
 *
 * To run a mutation, you first call `useUpsertGiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertGiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertGiftMutation, { data, loading, error }] = useUpsertGiftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertGiftMutation(baseOptions?: Apollo.MutationHookOptions<UpsertGiftMutation, UpsertGiftMutationVariables>) {
        return Apollo.useMutation<UpsertGiftMutation, UpsertGiftMutationVariables>(UpsertGiftDocument, baseOptions);
      }
export type UpsertGiftMutationHookResult = ReturnType<typeof useUpsertGiftMutation>;
export type UpsertGiftMutationResult = Apollo.MutationResult<UpsertGiftMutation>;
export type UpsertGiftMutationOptions = Apollo.BaseMutationOptions<UpsertGiftMutation, UpsertGiftMutationVariables>;
export const InvitePartnerDocument = gql`
    mutation InvitePartner($email: String!) {
  invitePartner(email: $email)
}
    `;
export type InvitePartnerMutationFn = Apollo.MutationFunction<InvitePartnerMutation, InvitePartnerMutationVariables>;

/**
 * __useInvitePartnerMutation__
 *
 * To run a mutation, you first call `useInvitePartnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvitePartnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invitePartnerMutation, { data, loading, error }] = useInvitePartnerMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInvitePartnerMutation(baseOptions?: Apollo.MutationHookOptions<InvitePartnerMutation, InvitePartnerMutationVariables>) {
        return Apollo.useMutation<InvitePartnerMutation, InvitePartnerMutationVariables>(InvitePartnerDocument, baseOptions);
      }
export type InvitePartnerMutationHookResult = ReturnType<typeof useInvitePartnerMutation>;
export type InvitePartnerMutationResult = Apollo.MutationResult<InvitePartnerMutation>;
export type InvitePartnerMutationOptions = Apollo.BaseMutationOptions<InvitePartnerMutation, InvitePartnerMutationVariables>;
export const RespondToInvitationDocument = gql`
    mutation RespondToInvitation($id: ID!, $status: GuestStatus!) {
  respondToInvitation(id: $id, status: $status) {
    id
    status
  }
}
    `;
export type RespondToInvitationMutationFn = Apollo.MutationFunction<RespondToInvitationMutation, RespondToInvitationMutationVariables>;

/**
 * __useRespondToInvitationMutation__
 *
 * To run a mutation, you first call `useRespondToInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRespondToInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [respondToInvitationMutation, { data, loading, error }] = useRespondToInvitationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useRespondToInvitationMutation(baseOptions?: Apollo.MutationHookOptions<RespondToInvitationMutation, RespondToInvitationMutationVariables>) {
        return Apollo.useMutation<RespondToInvitationMutation, RespondToInvitationMutationVariables>(RespondToInvitationDocument, baseOptions);
      }
export type RespondToInvitationMutationHookResult = ReturnType<typeof useRespondToInvitationMutation>;
export type RespondToInvitationMutationResult = Apollo.MutationResult<RespondToInvitationMutation>;
export type RespondToInvitationMutationOptions = Apollo.BaseMutationOptions<RespondToInvitationMutation, RespondToInvitationMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...MeInfo
  }
}
    ${MeInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const WeddingDocument = gql`
    query Wedding {
  wedding {
    ...WeddingInfo
  }
}
    ${WeddingInfoFragmentDoc}`;

/**
 * __useWeddingQuery__
 *
 * To run a query within a React component, call `useWeddingQuery` and pass it any options that fit your needs.
 * When your component renders, `useWeddingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWeddingQuery({
 *   variables: {
 *   },
 * });
 */
export function useWeddingQuery(baseOptions?: Apollo.QueryHookOptions<WeddingQuery, WeddingQueryVariables>) {
        return Apollo.useQuery<WeddingQuery, WeddingQueryVariables>(WeddingDocument, baseOptions);
      }
export function useWeddingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WeddingQuery, WeddingQueryVariables>) {
          return Apollo.useLazyQuery<WeddingQuery, WeddingQueryVariables>(WeddingDocument, baseOptions);
        }
export type WeddingQueryHookResult = ReturnType<typeof useWeddingQuery>;
export type WeddingLazyQueryHookResult = ReturnType<typeof useWeddingLazyQuery>;
export type WeddingQueryResult = Apollo.QueryResult<WeddingQuery, WeddingQueryVariables>;
export const GuestsDocument = gql`
    query Guests {
  guests {
    ...GuestInfo
  }
}
    ${GuestInfoFragmentDoc}`;

/**
 * __useGuestsQuery__
 *
 * To run a query within a React component, call `useGuestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGuestsQuery(baseOptions?: Apollo.QueryHookOptions<GuestsQuery, GuestsQueryVariables>) {
        return Apollo.useQuery<GuestsQuery, GuestsQueryVariables>(GuestsDocument, baseOptions);
      }
export function useGuestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuestsQuery, GuestsQueryVariables>) {
          return Apollo.useLazyQuery<GuestsQuery, GuestsQueryVariables>(GuestsDocument, baseOptions);
        }
export type GuestsQueryHookResult = ReturnType<typeof useGuestsQuery>;
export type GuestsLazyQueryHookResult = ReturnType<typeof useGuestsLazyQuery>;
export type GuestsQueryResult = Apollo.QueryResult<GuestsQuery, GuestsQueryVariables>;
export const GuestDocument = gql`
    query Guest($id: ID!) {
  guest(id: $id) {
    ...GuestInfo
  }
}
    ${GuestInfoFragmentDoc}`;

/**
 * __useGuestQuery__
 *
 * To run a query within a React component, call `useGuestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuestQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGuestQuery(baseOptions: Apollo.QueryHookOptions<GuestQuery, GuestQueryVariables>) {
        return Apollo.useQuery<GuestQuery, GuestQueryVariables>(GuestDocument, baseOptions);
      }
export function useGuestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuestQuery, GuestQueryVariables>) {
          return Apollo.useLazyQuery<GuestQuery, GuestQueryVariables>(GuestDocument, baseOptions);
        }
export type GuestQueryHookResult = ReturnType<typeof useGuestQuery>;
export type GuestLazyQueryHookResult = ReturnType<typeof useGuestLazyQuery>;
export type GuestQueryResult = Apollo.QueryResult<GuestQuery, GuestQueryVariables>;
export const GiftsDocument = gql`
    query Gifts {
  gifts {
    ...GiftInfo
  }
}
    ${GiftInfoFragmentDoc}`;

/**
 * __useGiftsQuery__
 *
 * To run a query within a React component, call `useGiftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGiftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGiftsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGiftsQuery(baseOptions?: Apollo.QueryHookOptions<GiftsQuery, GiftsQueryVariables>) {
        return Apollo.useQuery<GiftsQuery, GiftsQueryVariables>(GiftsDocument, baseOptions);
      }
export function useGiftsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GiftsQuery, GiftsQueryVariables>) {
          return Apollo.useLazyQuery<GiftsQuery, GiftsQueryVariables>(GiftsDocument, baseOptions);
        }
export type GiftsQueryHookResult = ReturnType<typeof useGiftsQuery>;
export type GiftsLazyQueryHookResult = ReturnType<typeof useGiftsLazyQuery>;
export type GiftsQueryResult = Apollo.QueryResult<GiftsQuery, GiftsQueryVariables>;
export const GiftDocument = gql`
    query Gift($id: ID!) {
  gift(id: $id) {
    ...GiftInfo
  }
}
    ${GiftInfoFragmentDoc}`;

/**
 * __useGiftQuery__
 *
 * To run a query within a React component, call `useGiftQuery` and pass it any options that fit your needs.
 * When your component renders, `useGiftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGiftQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGiftQuery(baseOptions: Apollo.QueryHookOptions<GiftQuery, GiftQueryVariables>) {
        return Apollo.useQuery<GiftQuery, GiftQueryVariables>(GiftDocument, baseOptions);
      }
export function useGiftLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GiftQuery, GiftQueryVariables>) {
          return Apollo.useLazyQuery<GiftQuery, GiftQueryVariables>(GiftDocument, baseOptions);
        }
export type GiftQueryHookResult = ReturnType<typeof useGiftQuery>;
export type GiftLazyQueryHookResult = ReturnType<typeof useGiftLazyQuery>;
export type GiftQueryResult = Apollo.QueryResult<GiftQuery, GiftQueryVariables>;
export const InvitationDocument = gql`
    query Invitation($id: ID!) {
  guestInvitation(id: $id) {
    id
    firstName
    lastName
    status
    plusX
    plusGuests
    wedding {
      id
      date
      rsvpUntil
      partner1Name
      partner2Name
      location
      gifts {
        id
        name
        price
        currency
        link
        imgUrl
      }
    }
  }
}
    `;

/**
 * __useInvitationQuery__
 *
 * To run a query within a React component, call `useInvitationQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInvitationQuery(baseOptions: Apollo.QueryHookOptions<InvitationQuery, InvitationQueryVariables>) {
        return Apollo.useQuery<InvitationQuery, InvitationQueryVariables>(InvitationDocument, baseOptions);
      }
export function useInvitationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitationQuery, InvitationQueryVariables>) {
          return Apollo.useLazyQuery<InvitationQuery, InvitationQueryVariables>(InvitationDocument, baseOptions);
        }
export type InvitationQueryHookResult = ReturnType<typeof useInvitationQuery>;
export type InvitationLazyQueryHookResult = ReturnType<typeof useInvitationLazyQuery>;
export type InvitationQueryResult = Apollo.QueryResult<InvitationQuery, InvitationQueryVariables>;
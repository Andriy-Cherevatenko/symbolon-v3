import gql from 'graphql-tag';

const SELECT_ZODIAC_SIGN = gql`
    mutation selectZodiacSign($value: String!) {
        selectZodiacSign(value: $value) @client
    }
`;

export default SELECT_ZODIAC_SIGN;

import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';

const ROLE_MAP = {
  Admin: 'ADMIN',
};
export function AuthDirective(schema: GraphQLSchema, directiveName: string) {
  const typeDirectiveArgumentMaps: Record<string, any> = {};

  const result = mapSchema(schema, {
    [MapperKind.TYPE]: (type) => {
      const authDirective = getDirective(schema, type, directiveName)?.[0];

      if (authDirective) {
        typeDirectiveArgumentMaps[type.name] = authDirective;
      }
      return undefined;
    },

    [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
      const authDirective =
        getDirective(schema, fieldConfig, directiveName)?.[0] ??
        typeDirectiveArgumentMaps[typeName];

      if (authDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;

        fieldConfig.resolve = async function (source, args, context, info) {
          console.log(authDirective);

          const result = await resolve(source, args, context, info);
          return result;
        };
        return fieldConfig;
      }
    },
  });

  return result;
}

//
// export function AuthDirective(
//   directiveName: string,
//   getUserFn: (token: string) => { hasRole: (role: string) => boolean },
// ) {
//   const typeDirectiveArgumentMaps: Record<string, any> = {};
//   return {

//     authDirectiveTransformer: (schema: GraphQLSchema) =>
//       mapSchema(schema, {
//         [MapperKind.TYPE]: (type) => {
//           const authDirective = getDirective(schema, type, directiveName)?.[0];
//           if (authDirective) {
//             typeDirectiveArgumentMaps[type.name] = authDirective;
//           }
//           return undefined;
//         },
//         [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
//           const authDirective =
//             getDirective(schema, fieldConfig, directiveName)?.[0] ??
//             typeDirectiveArgumentMaps[typeName];
//           if (authDirective) {
//             const { requires } = authDirective;
//             if (requires) {
//               const { resolve = defaultFieldResolver } = fieldConfig;
//               fieldConfig.resolve = function (source, args, context, info) {
//                 const user = getUserFn(context.headers.authToken);
//                 if (!user.hasRole(requires)) {
//                   throw new Error('not authorized');
//                 }
//                 return resolve(source, args, context, info);
//               };
//               return fieldConfig;
//             }
//           }
//         },
//       }),
//   };
// }

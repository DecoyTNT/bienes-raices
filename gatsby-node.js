const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allStrapiPaginas {
                nodes {
                    nombre
                    id
                }
            }
            allStrapiPropiedades {
                nodes {
                    nombre
                    id
                }
            }
        }
    `);

    // console.log(JSON.stringify(resultado.data.allStrapiPropiedades));

    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    const propiedades = resultado.data.allStrapiPropiedades.nodes;
    // console.log(propiedades);

    propiedades.forEach(propiedad => {
        actions.createPage({
            path: urlSlug(propiedad.nombre),
            component: require.resolve('./src/components/propiedades.jsx'),
            context: {
                id: propiedad.id
            }
        })
    });

    const paginas = resultado.data.allStrapiPaginas.nodes;

    paginas.forEach(pagina => {
        actions.createPage({
            path: urlSlug(pagina.nombre),
            component: require.resolve('./src/components/paginas.jsx'),
            context: {
                id: pagina.id
            }
        })
    })
}
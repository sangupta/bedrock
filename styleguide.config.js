const glob = require( "glob" );
const path = require( "path" );
const fs = require( "fs" );

function getComponents(folder) {
    if(!folder) {
        return [];
    }

    const files = glob.sync('src/' + folder + '/**/*.{ts,tsx}');

    // sort based on file name and not path
    files.sort(function(file1, file2) {
        const index1 = file1.lastIndexOf('/');
        const index2 = file2.lastIndexOf('/');
        
        const name1 = file1.substring(index1 + 1);
        const name2 = file2.substring(index2 + 1);

        return name1.localeCompare(name2);
    });

    return files;
};

module.exports = {
    title : 'Bedrock Component Library',
    pagePerSection: true,
    propsParser: require( "react-docgen-typescript" ).parse,
    webpackConfig: Object.assign( {}, require( "./webpack.config" ), {} ),
    styleguideDir: "docs",
    exampleMode: 'expand',
    usageMode: 'expand',
    // components : getComponents,
    sections : [
        {
            name : 'Components',
            sectionDepth : 3,
            sections : [
                {
                    name : 'Buttons',
                    components: getComponents('components/buttons'),
                },
                {
                    name : 'Cards',
                    components: getComponents('components/cards'),
                },
                {
                    name : 'Collection',
                    components: getComponents('components/collection'),
                },
                {
                    name : 'Connectors',
                    components: getComponents('components/connectors'),
                },
                {
                    name : 'Containers',
                    components: getComponents('components/containers'),
                },
                {
                    name : 'Content',
                    components: getComponents('components/content'),
                },
                {
                    name : 'Form',
                    components: getComponents('components/form'),
                },
                {
                    name : 'Layout',
                    components: getComponents('components/layout'),
                },
                {
                    name : 'Navigation',
                    components: getComponents('components/nav'),
                },
                {
                    name : 'Notifications',
                    components: getComponents('components/notify'),
                },
                {
                    name : 'Popovers',
                    components: getComponents('components/pop'),
                },
                {
                    name : 'Progress Indicators',
                    components: getComponents('components/progress'),
                },
                {
                    name : 'Tables',
                    components: getComponents('components/tables'),
                },
            ]
        },
        {
            name : 'Fragments',
            components: getComponents('fragments')
        },
        {
            name : 'Primed Components',
            components: getComponents('primed')
        },
        {
            name : 'Page Templates',
            components: getComponents('templates')
        }
    ],
    template : {
        head : {
            links : [
                {
                    rel : 'stylesheet',
                    href : 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
                },
                {
                    rel : 'stylesheet',
                    href : './assets/bedrock.css'
                },
                {
                    rel : 'stylesheet',
                    href : './assets/bedrock-docs.css'
                }
            ]
        }
    }
};

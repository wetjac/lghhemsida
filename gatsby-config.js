module.exports = {
    siteMetadata: {
        title: 'Lägenhetsbytessida',
        author: 'Jacqueline Wettergren'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
}
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            borderRadius: {
                m: '3px'
            },
            boxShadow: {
                icoM: '0 16px 20px 0 rgba(0, 14, 25, 0.04)',
                icoL: '0 20px 30px 0 rgba(0, 14, 25, 0.1)',
                icoXL: '0 30px 40px 0 rgba(0, 14, 25, 0.14)',
                icoXXL: '0 30px 50px 0 rgba(0, 14, 25, 0.08)',
                icoDarkXL: '0 30px 40px 0 rgba(0, 0, 0, 0.5)'
            },
            colors: {
                icoBlue: {
                    900: '#000e19',
                    DEFAULT: '#0089ff',
                    400: '#1a95ff',
                    300: '#33a1ff',
                    200: '#80c4ff',
                    100: '#e6f3ff'
                },
                icoGreen: {
                    DEFAULT: '#4fd046',
                    400: '#61d559',
                    300: '#72d96b',
                    200: '#a7e8a3',
                    100: '#edfaed'
                },
                icoRed: {
                    DEFAULT: '#ee3034',
                    400: '#f04548',
                    300: '#f1595d',
                    200: '#f7989a',
                    100: '#fdeaeb'
                },
                icoYellow: {
                    DEFAULT: '#ffb000',
                    400: '#ffb81a',
                    300: '#ffc033',
                    200: '#ffd880',
                    100: '#fff7e6'
                },
                icoPurple: {
                    DEFAULT: '#7900ff',
                    400: '#861aff',
                    300: '#9433ff',
                    200: '#bc80ff',
                    100: '#f2e6ff'
                },
                icoPink: {
                    DEFAULT: '#e04faa',
                    400: '#e361b3',
                    300: '#e672bb',
                    200: '#f0a7d5',
                    100: '#fcedf7'
                },
                icoAquaBlue: {
                    DEFAULT: '#05ab9b',
                    400: '#1eb3a5',
                    300: '#37bcaf',
                    200: '#82d5cd',
                    100: '#e6f7f5'
                },
                icoBlack: {
                    DEFAULT: '#1d1d1b',
                    400: '#091d1b'
                },
                icoGray: {
                    500: '#899aaf',
                    400: '#bfc6cf',
                    300: '#f0f2f6',
                    200: '#f4f6f9',
                    100: '#f9fafb'
                },
                icoGrayFirefox: {
                    300: 'rgba(240, 242, 246, .9)'
                },
                icoWhiteFirefox: {
                    DEFAULT: 'rgba(255, 255, 255, .9)'
                },
                facebook: '#1877f2',
                twitter: '#1da1f2',
                linkedin: '#0a66c2',
                icoDarkMode: {
                    deepBlack: '#090a0d',
                    anthracite: '#14151d',
                    beton: '#4f5262',
                    wolf: '#8e92a6',
                    blueStats: '#54a4ff',
                    green: '#8bfdb6',
                    aquaBlue: '#52faea',
                    purple: '#a79af8',
                    red: '#ff7679',
                    yellow: '#f8b96a',
                    pink: '#ffa1dc'
                }
            },
            fontSize: {
                xxs: [
                    '10px',
                    {
                        lineHeight: '.75rem',
                        letterSpacing: '-0.3px'
                    }
                ],
                xs: [
                    '12px',
                    {
                        lineHeight: '0.875rem',
                        letterSpacing: '-0.3px'
                    }
                ],
                13: [
                    '13px',
                    {
                        lineHeight: '0.875rem',
                        letterSpacing: '-0.3px'
                    }
                ],
                sm: [
                    '14px',
                    {
                        lineHeight: '1rem',
                        letterSpacing: '-0.4px'
                    }
                ],
                base: [
                    '16px',
                    {
                        lineHeight: '1.25rem',
                        letterSpacing: '-0.5px'
                    }
                ],
                xl: [
                    '20px',
                    {
                        lineHeight: '25px',
                        letterSpacing: '-0.5px'
                    }
                ],
                '3.5xl': [
                    '32px',
                    {
                        lineHeight: '2rem',
                        letterSpacing: '-1px'
                    }
                ],
                '5xl': [
                    '48px',
                    {
                        lineHeight: '3rem',
                        letterSpacing: '-2px'
                    }
                ]
            },
            spacing: {
                m: '1.125rem',
                5.5: '1.375rem',
                11.5: '2.875rem',
                13: '3.25rem',
                15: '3.75rem',
                17: '4.375rem'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};

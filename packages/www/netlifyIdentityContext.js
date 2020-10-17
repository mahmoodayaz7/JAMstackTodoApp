const React = require('react');
const useState = require('react');
const useEffect = require('react');
const netlifyIdentity = require('netlify-identity-widget');

const IdentifyContext = React.createContext({});

exports.IdentifyContext = IdentifyContext;

const IdentityProvider = props => {
    const [user, setUser] = useState();

    useEffect(() => {
        NetlifyIdentityWidget.init({});
    });

    NetlifyIdentityWidget.on("login", user => {
        NetlifyIdentityWidget.close();
        setUser(user);
    });

    NetlifyIdentityWidget.on("logout", () => {
        NetlifyIdentityWidget.close();
        setUser();
    })

    return(
        <IdentifyContext.Provider value={{ identity: netlifyIdentity, user: undefined }}>
            {props.children}
        </IdentifyContext.Provider>
    )
}

exports.Provider = IdentityProvider;
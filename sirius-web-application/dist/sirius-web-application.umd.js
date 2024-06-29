(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react/jsx-runtime"), require("@eclipse-sirius/sirius-components-core"), require("@eclipse-sirius/sirius-components-diagrams"), require("@eclipse-sirius/sirius-components-forms"), require("@eclipse-sirius/sirius-components-trees"), require("@eclipse-sirius/sirius-components-validation"), require("@material-ui/core/CssBaseline"), require("@material-ui/core/styles"), require("@material-ui/icons/AccountTree"), require("@material-ui/icons/Filter"), require("@material-ui/icons/Link"), require("@material-ui/icons/Menu"), require("@material-ui/icons/Warning"), require("react"), require("react-router-dom"), require("@material-ui/core/IconButton"), require("@material-ui/icons/Close"), require("notistack"), require("@apollo/client"), require("@apollo/client/cache"), require("@apollo/client/link/ws"), require("@apollo/client/utilities"), require("@material-ui/core/Card"), require("@material-ui/core/CardContent"), require("@material-ui/core/List/List"), require("@material-ui/core/ListItem"), require("@material-ui/core/ListItemIcon"), require("@material-ui/core/ListItemText"), require("@material-ui/core/Typography"), require("@material-ui/icons"), require("@material-ui/core/List"), require("@eclipse-sirius/sirius-components-formdescriptioneditors"), require("@eclipse-sirius/sirius-components-portals"), require("@material-ui/core/Grid"), require("@xstate/react"), require("reactflow"), require("@material-ui/core/AppBar"), require("@material-ui/core/Link"), require("@material-ui/core/Toolbar"), require("@material-ui/core/Tooltip"), require("@material-ui/core/SvgIcon"), require("@material-ui/icons/Help"), require("@material-ui/core/MenuItem"), require("@material-ui/icons/Add"), require("@material-ui/core/Button"), require("@material-ui/core/Dialog"), require("@material-ui/core/DialogActions"), require("@material-ui/core/DialogContent"), require("@material-ui/core/DialogTitle"), require("@material-ui/core/InputLabel"), require("@material-ui/core/Select"), require("@material-ui/core/Snackbar"), require("xstate"), require("@material-ui/icons/GetApp"), require("@material-ui/core/Checkbox"), require("@material-ui/core/FormControlLabel"), require("@material-ui/core/Menu"), require("@material-ui/icons/Delete"), require("@material-ui/icons/Edit"), require("@material-ui/icons/MoreVert"), require("@material-ui/icons/Settings"), require("@material-ui/core/DialogContentText"), require("@material-ui/core/TextField"), require("@material-ui/icons/ChevronLeft"), require("@material-ui/icons/ChevronRight"), require("@material-ui/core"), require("@material-ui/core/InputAdornment"), require("@material-ui/icons/Clear"), require("@material-ui/icons/Search"), require("@material-ui/core/FormGroup"), require("@material-ui/core/Container"), require("@material-ui/core/Paper"), require("@material-ui/core/CardActions"), require("@material-ui/core/CircularProgress"), require("@material-ui/icons/CloudUploadOutlined"), require("@material-ui/icons/MoreHoriz"), require("@material-ui/lab/Pagination"), require("graphql"), require("@material-ui/core/Table"), require("@material-ui/core/TableBody"), require("@material-ui/core/TableCell"), require("@material-ui/core/TableContainer"), require("@material-ui/core/TableHead"), require("@material-ui/core/TablePagination"), require("@material-ui/core/TableRow"), require("@material-ui/core/Box"), require("@material-ui/icons/EditOutlined"), require("@material-ui/icons/FileCopyOutlined"), require("@material-ui/icons/ImageOutlined")) : typeof define === "function" && define.amd ? define(["exports", "react/jsx-runtime", "@eclipse-sirius/sirius-components-core", "@eclipse-sirius/sirius-components-diagrams", "@eclipse-sirius/sirius-components-forms", "@eclipse-sirius/sirius-components-trees", "@eclipse-sirius/sirius-components-validation", "@material-ui/core/CssBaseline", "@material-ui/core/styles", "@material-ui/icons/AccountTree", "@material-ui/icons/Filter", "@material-ui/icons/Link", "@material-ui/icons/Menu", "@material-ui/icons/Warning", "react", "react-router-dom", "@material-ui/core/IconButton", "@material-ui/icons/Close", "notistack", "@apollo/client", "@apollo/client/cache", "@apollo/client/link/ws", "@apollo/client/utilities", "@material-ui/core/Card", "@material-ui/core/CardContent", "@material-ui/core/List/List", "@material-ui/core/ListItem", "@material-ui/core/ListItemIcon", "@material-ui/core/ListItemText", "@material-ui/core/Typography", "@material-ui/icons", "@material-ui/core/List", "@eclipse-sirius/sirius-components-formdescriptioneditors", "@eclipse-sirius/sirius-components-portals", "@material-ui/core/Grid", "@xstate/react", "reactflow", "@material-ui/core/AppBar", "@material-ui/core/Link", "@material-ui/core/Toolbar", "@material-ui/core/Tooltip", "@material-ui/core/SvgIcon", "@material-ui/icons/Help", "@material-ui/core/MenuItem", "@material-ui/icons/Add", "@material-ui/core/Button", "@material-ui/core/Dialog", "@material-ui/core/DialogActions", "@material-ui/core/DialogContent", "@material-ui/core/DialogTitle", "@material-ui/core/InputLabel", "@material-ui/core/Select", "@material-ui/core/Snackbar", "xstate", "@material-ui/icons/GetApp", "@material-ui/core/Checkbox", "@material-ui/core/FormControlLabel", "@material-ui/core/Menu", "@material-ui/icons/Delete", "@material-ui/icons/Edit", "@material-ui/icons/MoreVert", "@material-ui/icons/Settings", "@material-ui/core/DialogContentText", "@material-ui/core/TextField", "@material-ui/icons/ChevronLeft", "@material-ui/icons/ChevronRight", "@material-ui/core", "@material-ui/core/InputAdornment", "@material-ui/icons/Clear", "@material-ui/icons/Search", "@material-ui/core/FormGroup", "@material-ui/core/Container", "@material-ui/core/Paper", "@material-ui/core/CardActions", "@material-ui/core/CircularProgress", "@material-ui/icons/CloudUploadOutlined", "@material-ui/icons/MoreHoriz", "@material-ui/lab/Pagination", "graphql", "@material-ui/core/Table", "@material-ui/core/TableBody", "@material-ui/core/TableCell", "@material-ui/core/TableContainer", "@material-ui/core/TableHead", "@material-ui/core/TablePagination", "@material-ui/core/TableRow", "@material-ui/core/Box", "@material-ui/icons/EditOutlined", "@material-ui/icons/FileCopyOutlined", "@material-ui/icons/ImageOutlined"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["sirius-web-application"] = {}, global.jsxRuntime, global.siriusComponentsCore, global.siriusComponentsDiagrams, global.siriusComponentsForms, global.siriusComponentsTrees, global.siriusComponentsValidation, global.CssBaseline, global.styles, global.AccountTreeIcon, global.Filter, global.LinkIcon, global.MenuIcon, global.WarningIcon, global.React, global.reactRouterDom, global.IconButton, global.CloseIcon, global.notistack, global.client, global.cache, global.ws, global.utilities, global.Card, global.CardContent, global.List, global.ListItem, global.ListItemIcon, global.ListItemText, global.Typography, global.icons, global.List$1, global.siriusComponentsFormdescriptioneditors, global.siriusComponentsPortals, global.Grid, global.react, global.reactflow, global.AppBar, global.Link, global.Toolbar, global.Tooltip, global.SvgIcon, global.HelpIcon, global.MenuItem, global.AddIcon, global.Button, global.Dialog, global.DialogActions, global.DialogContent, global.DialogTitle, global.InputLabel, global.Select, global.Snackbar, global.xstate, global.GetAppIcon, global.Checkbox, global.FormControlLabel, global.Menu, global.DeleteIcon, global.EditIcon, global.MoreVertIcon, global.SettingsIcon, global.DialogContentText, global.TextField, global.ChevronLeftIcon, global.ChevronRightIcon, global.core, global.InputAdornment, global.ClearIcon, global.SearchIcon, global.FormGroup, global.Container, global.Paper, global.CardActions, global.CircularProgress, global.CloudUploadOutlinedIcon, global.MoreHorizIcon, global.Pagination, global.graphql, global.Table, global.TableBody, global.TableCell, global.TableContainer, global.TableHead, global.TablePagination, global.TableRow, global.Box, global.EditOutlinedIcon, global.FileCopyOutlinedIcon, global.ImageOutlinedIcon));
})(this, function(exports2, jsxRuntime, siriusComponentsCore, siriusComponentsDiagrams, siriusComponentsForms, siriusComponentsTrees, siriusComponentsValidation, CssBaseline, styles, AccountTreeIcon, Filter, LinkIcon, MenuIcon, WarningIcon, React, reactRouterDom, IconButton, CloseIcon, notistack, client, cache, ws, utilities, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography, icons, List$1, siriusComponentsFormdescriptioneditors, siriusComponentsPortals, Grid, react, reactflow, AppBar, Link, Toolbar, Tooltip, SvgIcon, HelpIcon, MenuItem, AddIcon, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, Select, Snackbar, xstate, GetAppIcon, Checkbox, FormControlLabel, Menu, DeleteIcon, EditIcon, MoreVertIcon, SettingsIcon, DialogContentText, TextField, ChevronLeftIcon, ChevronRightIcon, core, InputAdornment, ClearIcon, SearchIcon, FormGroup, Container, Paper, CardActions, CircularProgress, CloudUploadOutlinedIcon, MoreHorizIcon, Pagination, graphql, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box, EditOutlinedIcon, FileCopyOutlinedIcon, ImageOutlinedIcon) {
  "use strict";
  const StyledMaterialDesignContent = styles.styled(notistack.MaterialDesignContent)(({ theme }) => ({
    "&.notistack-MuiContent-default": {
      backgroundColor: theme.palette.primary.main
    },
    "&.notistack-MuiContent-success": {
      backgroundColor: theme.palette.success.main
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: theme.palette.error.main
    },
    "&.notistack-MuiContent-warning": {
      backgroundColor: theme.palette.warning.main
    },
    "&.notistack-MuiContent-info": {
      backgroundColor: theme.palette.info.main
    }
  }));
  const ToastCloseButton = ({ toastKey }) => {
    const { closeSnackbar } = notistack.useSnackbar();
    return /* @__PURE__ */ jsxRuntime.jsx(IconButton, { size: "small", "aria-label": "close", color: "inherit", onClick: () => closeSnackbar(toastKey), children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon, { fontSize: "small" }) });
  };
  const ToastContextInitializer = ({ children }) => {
    const { enqueueSnackbar } = notistack.useSnackbar();
    return /* @__PURE__ */ jsxRuntime.jsx(
      siriusComponentsCore.ToastContext.Provider,
      {
        value: {
          enqueueSnackbar
        },
        children
      }
    );
  };
  const ToastProvider = ({ children }) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      notistack.SnackbarProvider,
      {
        maxSnack: 5,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        action: (key) => /* @__PURE__ */ jsxRuntime.jsx(ToastCloseButton, { toastKey: key }),
        autoHideDuration: 1e4,
        "data-testid": "toast",
        Components: {
          default: StyledMaterialDesignContent,
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
          warning: StyledMaterialDesignContent,
          info: StyledMaterialDesignContent
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(ToastContextInitializer, { children })
      }
    );
  };
  const defaultNodeTypeRegistry = {
    nodeConverters: [],
    nodeLayoutHandlers: [],
    graphQLNodeStyleFragments: [],
    nodeTypeContributions: []
  };
  const DiagramRepresentationConfiguration = ({}) => {
    return null;
  };
  const ViewerProjectsFragment = client.gql`
  fragment ViewerProjects on Viewer {
    projects(page: $page, limit: $limit) {
      edges {
        node {
          ...Project
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        count
      }
    }
  }
`;
  const ProjectFragment = client.gql`
  fragment Project on Project {
    id
    name
  }
`;
  const httpOptionsConfigurersExtensionPoint = {
    identifier: "apolloClient#httpOptionsConfigurers",
    fallback: []
  };
  const webSocketOptionsConfigurersExtensionPoint = {
    identifier: "apolloClient#webSocketOptionsConfigurers",
    fallback: []
  };
  const cacheOptionsConfigurersExtensionPoint = {
    identifier: "apolloClient#cacheOptionsConfigurers",
    fallback: []
  };
  const apolloClientOptionsConfigurersExtensionPoint = {
    identifier: "apolloClient#apolloClientOptionsConfigurers",
    fallback: []
  };
  const useCreateApolloClient = (httpOrigin, wsOrigin) => {
    let httpOptions = {
      uri: `${httpOrigin}/api/graphql`
    };
    const { data: httpOptionsConfigurers } = siriusComponentsCore.useData(httpOptionsConfigurersExtensionPoint);
    httpOptionsConfigurers.forEach((configurer) => {
      httpOptions = configurer(httpOptions);
    });
    let webSocketOptions = {
      uri: `${wsOrigin}/subscriptions`,
      options: {
        reconnect: true,
        lazy: true
      }
    };
    const { data: webSocketOptionsConfigurers } = siriusComponentsCore.useData(webSocketOptionsConfigurersExtensionPoint);
    webSocketOptionsConfigurers.forEach((configurer) => {
      webSocketOptions = configurer(webSocketOptions);
    });
    let fragmentRegistry = cache.createFragmentRegistry();
    fragmentRegistry.register(ViewerProjectsFragment, ProjectFragment);
    let cacheOptions = {
      fragments: fragmentRegistry
    };
    const { data: cacheOptionsConfigurers } = siriusComponentsCore.useData(cacheOptionsConfigurersExtensionPoint);
    cacheOptionsConfigurers.forEach((configurer) => {
      cacheOptions = configurer(cacheOptions);
    });
    const httpLink = new client.HttpLink(httpOptions);
    const wsLink = new ws.WebSocketLink(webSocketOptions);
    const link = client.split(
      ({ query }) => {
        const definition = utilities.getMainDefinition(query);
        return definition.kind === "OperationDefinition" && definition.operation === "subscription";
      },
      wsLink,
      httpLink
    );
    const cache$1 = new client.InMemoryCache(cacheOptions);
    const defaultOptions = {
      watchQuery: {
        fetchPolicy: "no-cache"
      },
      query: {
        fetchPolicy: "no-cache"
      },
      mutate: {
        fetchPolicy: "no-cache"
      }
    };
    let apolloClientOptions = {
      link,
      cache: cache$1,
      connectToDevTools: true,
      defaultOptions
    };
    const { data: apolloClientOptionsConfigurers } = siriusComponentsCore.useData(apolloClientOptionsConfigurersExtensionPoint);
    apolloClientOptionsConfigurers.forEach((configurer) => {
      apolloClientOptions = configurer(apolloClientOptions);
    });
    const apolloClient = React.useMemo(() => new client.ApolloClient(apolloClientOptions), [apolloClientOptions]);
    return apolloClient;
  };
  const ApolloGraphQLProvider = ({ children, httpOrigin, wsOrigin }) => {
    const apolloClient = useCreateApolloClient(httpOrigin, wsOrigin);
    return /* @__PURE__ */ jsxRuntime.jsx(client.ApolloProvider, { client: apolloClient, children });
  };
  const useNewDocumentAreaStyles = styles.makeStyles((theme) => ({
    cardContent: {
      overflowY: "auto",
      maxHeight: theme.spacing(50)
    },
    item: {
      padding: 0
    }
  }));
  const invokeEditingContextActionMutation = client.gql`
  mutation invokeEditingContextAction($input: InvokeEditingContextActionInput!) {
    invokeEditingContextAction(input: $input) {
      __typename
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const isErrorPayload$e = (payload) => payload.__typename === "ErrorPayload";
  const NewDocumentArea = ({ editingContextId, editingContextActions, readOnly }) => {
    const classes = useNewDocumentAreaStyles();
    const [state, setState] = React.useState({
      message: null
    });
    const [
      invokeEditingContextAction,
      { loading: loadingEditingContextAction, data: dataEditingContextAction, error: errorEditingContextAction }
    ] = client.useMutation(
      invokeEditingContextActionMutation
    );
    const onInvokeEditingContextAction = (actionId) => {
      const input = {
        id: crypto.randomUUID(),
        editingContextId,
        actionId
      };
      const variables = {
        input
      };
      invokeEditingContextAction({ variables });
    };
    React.useEffect(() => {
      if (!loadingEditingContextAction) {
        if (errorEditingContextAction) {
          setState({ message: "An unexpected error has occurred, please refresh the page" });
        }
        if (dataEditingContextAction) {
          const { invokeEditingContextAction: invokeEditingContextAction2 } = dataEditingContextAction;
          if (isErrorPayload$e(invokeEditingContextAction2)) {
            setState({ message: invokeEditingContextAction2.message });
          }
        }
      }
    }, [loadingEditingContextAction, errorEditingContextAction, dataEditingContextAction]);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Card, { "data-testid": "actions", children: /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: classes.cardContent, children: [
        /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h6", children: "Create a new Model" }),
        /* @__PURE__ */ jsxRuntime.jsx(Typography, { color: "textSecondary", children: readOnly ? "You need edit access to create models" : "Select the model to create" }),
        /* @__PURE__ */ jsxRuntime.jsx(List, { dense: true, children: readOnly ? null : editingContextActions.map((editingContextAction) => {
          return /* @__PURE__ */ jsxRuntime.jsxs(
            ListItem,
            {
              className: classes.item,
              disableGutters: true,
              button: true,
              "data-testid": editingContextAction.id,
              onClick: () => {
                onInvokeEditingContextAction(editingContextAction.id);
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(icons.NoteAdd, { htmlColor: "primary", fontSize: "small" }) }),
                /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: editingContextAction.label })
              ]
            },
            editingContextAction.id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsCore.Toast, { message: state.message, open: !!state.message, onClose: () => setState({ message: null }) })
    ] });
  };
  const useNewRepresentationAreaStyles = styles.makeStyles((theme) => ({
    subtitles: {
      textOverflow: 'ellipsis " [..]";'
    },
    cardContent: {
      overflowY: "auto",
      maxHeight: theme.spacing(50)
    },
    item: {
      padding: 0
    }
  }));
  const createRepresentationMutation$1 = client.gql`
  mutation createRepresentation($input: CreateRepresentationInput!) {
    createRepresentation(input: $input) {
      __typename
      ... on CreateRepresentationSuccessPayload {
        representation {
          id
          label
          kind
          __typename
        }
      }
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const isErrorPayload$d = (payload) => payload.__typename === "ErrorPayload";
  const NewRepresentationArea = ({
    editingContextId,
    representationDescriptions,
    readOnly
  }) => {
    const [state, setState] = React.useState({
      message: null
    });
    const classes = useNewRepresentationAreaStyles();
    const { selection, setSelection } = siriusComponentsCore.useSelection();
    const selectedItem = selection.entries.length > 0 ? selection.entries[0] : null;
    const [createRepresentation, { loading, data, error }] = client.useMutation(createRepresentationMutation$1);
    React.useEffect(() => {
      if (!loading) {
        if (error) {
          setState({ message: "An unexpected error has occurred, please refresh the page" });
        }
        if (data) {
          const { createRepresentation: createRepresentation2 } = data;
          if (createRepresentation2.representation) {
            const { id, label, kind } = createRepresentation2.representation;
            setSelection({ entries: [{ id, label, kind }] });
          }
          if (isErrorPayload$d(createRepresentation2)) {
            setState({ message: createRepresentation2.message });
          }
        }
      }
    }, [loading, error, data]);
    const onCreateRepresentation = (representationDescriptionId) => {
      const selected = representationDescriptions.find((candidate) => candidate.id === representationDescriptionId);
      const objectId = selectedItem.id;
      const input = {
        id: crypto.randomUUID(),
        editingContextId,
        objectId,
        representationDescriptionId,
        representationName: selected.defaultName
      };
      createRepresentation({ variables: { input } });
    };
    const subtitle = selectedItem && representationDescriptions.length > 0 ? "Select the representation to create on " + selectedItem.label : "There are no representations available for the current selection";
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Card, { children: /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: classes.cardContent, children: [
        /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h6", children: "Create a new Representation" }),
        /* @__PURE__ */ jsxRuntime.jsx(Typography, { className: classes.subtitles, color: "textSecondary", children: readOnly ? "You need edit access to create representations" : subtitle }),
        /* @__PURE__ */ jsxRuntime.jsx(List$1, { dense: true, children: readOnly ? null : representationDescriptions.sort((a, b) => a.defaultName.localeCompare(b.defaultName)).map((representationDescription) => {
          return /* @__PURE__ */ jsxRuntime.jsxs(
            ListItem,
            {
              className: classes.item,
              disableGutters: true,
              button: true,
              "data-testid": representationDescription.id,
              onClick: () => {
                onCreateRepresentation(representationDescription.id);
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(icons.Collections, { htmlColor: "primary", fontSize: "small" }) }),
                /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: representationDescription.defaultName })
              ]
            },
            representationDescription.id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsCore.Toast, { message: state.message, open: !!state.message, onClose: () => setState({ message: null }) })
    ] });
  };
  const useRepresentationAreaStyles = styles.makeStyles((theme) => ({
    cardContent: {
      overflowY: "auto",
      maxHeight: theme.spacing(50)
    }
  }));
  const RepresentationsArea = ({ representations }) => {
    const { setSelection } = siriusComponentsCore.useSelection();
    const classes = useRepresentationAreaStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(Card, { children: /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: classes.cardContent, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h6", children: "Open an existing Representation" }),
      /* @__PURE__ */ jsxRuntime.jsx(Typography, { color: "textSecondary", children: "Select the representation to open" }),
      /* @__PURE__ */ jsxRuntime.jsx(List$1, { dense: true, children: representations.sort((a, b) => a.label.localeCompare(b.label)).map((representation) => {
        return /* @__PURE__ */ jsxRuntime.jsxs(
          ListItem,
          {
            disableGutters: true,
            button: true,
            "data-testid": `onboard-open-${representation.label}`,
            onClick: () => setSelection({
              entries: [{ id: representation.id, label: representation.label, kind: representation.kind }]
            }),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(icons.Collections, { htmlColor: "primary", fontSize: "small" }) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: representation.label })
            ]
          },
          representation.id
        );
      }) })
    ] }) });
  };
  const getOnboardDataQuery = client.gql`
  query getOnboardData($editingContextId: ID!, $objectId: ID!) {
    viewer {
      editingContext(editingContextId: $editingContextId) {
        representationDescriptions(objectId: $objectId) {
          edges {
            node {
              id
              label
              defaultName
            }
          }
        }
        representations {
          edges {
            node {
              id
              label
              kind
            }
          }
        }
        actions {
          edges {
            node {
              id
              label
            }
          }
        }
      }
    }
  }
`;
  const INITIAL_STATE = {
    editingContextActions: [],
    representationDescriptions: [],
    representations: []
  };
  const useOnboardAreaStyles = styles.makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      padding: theme.spacing(5),
      overflowY: "auto",
      overflowX: "auto"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: theme.spacing(2)
    },
    box: {}
  }));
  const OnboardArea = ({ editingContextId, readOnly }) => {
    const classes = useOnboardAreaStyles();
    const [state, setState] = React.useState(INITIAL_STATE);
    const { editingContextActions, representationDescriptions, representations } = state;
    const { selection } = siriusComponentsCore.useSelection();
    const objectId = selection.entries.length > 0 ? selection.entries[0].id : "";
    const [getOnboardData, { loading, data, error }] = client.useLazyQuery(getOnboardDataQuery);
    React.useEffect(() => {
      getOnboardData({ variables: { editingContextId, objectId } });
    }, [editingContextId, objectId, getOnboardData]);
    React.useEffect(() => {
      if (!loading && !error && (data == null ? void 0 : data.viewer)) {
        const { viewer } = data;
        const representations2 = viewer.editingContext.representations.edges.map((edge) => edge.node);
        const editingContextActions2 = viewer.editingContext.actions.edges.map((edge) => edge.node);
        const representationDescriptions2 = viewer.editingContext.representationDescriptions.edges.map(
          (edge) => edge.node
        );
        setState({
          representations: representations2,
          editingContextActions: editingContextActions2,
          representationDescriptions: representationDescriptions2
        });
      }
    }, [editingContextId, objectId, loading, data, error]);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.container, "data-testid": "onboard-area", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.grid, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        NewDocumentArea,
        {
          editingContextId,
          editingContextActions,
          readOnly
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        NewRepresentationArea,
        {
          editingContextId,
          representationDescriptions,
          readOnly
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(RepresentationsArea, { representations })
    ] }) });
  };
  const RepresentationContextProvider = ({ children }) => {
    const registry = {
      getComponent: (representation) => {
        const query = representation.kind.substring(representation.kind.indexOf("?") + 1, representation.kind.length);
        const params = new URLSearchParams(query);
        const type = params.get("type");
        if (type === "Diagram") {
          return siriusComponentsDiagrams.DiagramRepresentation;
        } else if (type === "Form") {
          return siriusComponentsForms.FormRepresentation;
        } else if (type === "FormDescriptionEditor") {
          return siriusComponentsFormdescriptioneditors.FormDescriptionEditorRepresentation;
        } else if (type === "Portal") {
          return siriusComponentsPortals.PortalRepresentation;
        }
        return null;
      }
    };
    const representationContextValue = {
      registry
    };
    return /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsCore.RepresentationContext.Provider, { value: representationContextValue, children });
  };
  const withErrorBoundary = (Child) => {
    return class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          error: null,
          children: this.props.children
        };
      }
      /**
       * This is called by React when one of our children component has raised an error.
       * We simply take note of it in the state for the next render() call to decide
       * what to do.
       *
       * @param {*} error the error that was raised.
       */
      static getDerivedStateFromError(error) {
        console.error("ErrorBoundary caught error", error);
        if (error) {
          return { error };
        }
        return { error: null };
      }
      /**
       * Some magic spell to make this actually work. Ask @sbegaudeau.
       *
       * @param {*} props
       * @param {*} state
       */
      static getDerivedStateFromProps(props, state) {
        if (state.children && state.children !== props.children) {
          return { error: null, children: props.children };
        }
        return state;
      }
      render() {
        if (this.state.error) {
          return /* @__PURE__ */ jsxRuntime.jsx("p", { children: "An error has occurred, please contact your administrator or refresh the page..." });
        }
        return /* @__PURE__ */ jsxRuntime.jsx(Child, {});
      }
    };
  };
  const SiriusIcon = (props) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      SvgIcon,
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 25",
        "aria-labelledby": "title",
        "aria-describedby": "desc",
        role: "img",
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("g", { clipPath: "url(#clip0)", children: [
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.1054 17.4819C13.7518 18.4703 16.5064 21.1326 17.7781 24.4164C15.9477 22.008 13.1123 20.0623 9.66922 19.1289C6.21873 18.1936 2.80132 18.4462 0.0227487 19.6124C2.74792 17.4056 6.45436 16.4922 10.1054 17.4819Z" }),
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.936 11.9146C7.90778 8.24374 6.97835 4.50902 4.76483 1.75357C5.93765 4.55604 6.20426 8.00141 5.28665 11.4677C4.36706 14.9414 2.43235 17.79 0.024883 19.6238C3.30927 18.3588 5.96295 15.5903 6.936 11.9146Z" }),
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.4569 13.6389L9.49624 12.8515L10.1683 10.7577L10.956 12.8147L13.0362 13.498L10.9969 14.2854L10.3248 16.3792L9.53719 14.3223L7.4569 13.6389Z" }),
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.9123 7.37704C10.2681 6.3929 7.51923 3.72617 6.25486 0.432119C8.0799 2.84596 10.9111 4.7931 14.3522 5.72239C17.8007 6.65367 21.2188 6.39226 24.0001 5.21506C21.2699 7.43693 17.5613 8.36247 13.9123 7.37704Z" }),
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.0984 12.939C16.1219 16.6119 17.0389 20.3445 19.2373 23.0951C18.0756 20.2952 17.8181 16.8505 18.7401 13.3824C19.6642 9.90675 21.5978 7.05405 24 5.21509C20.7257 6.48713 18.0761 9.26133 17.0984 12.939Z" }),
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.5109 10.7228L14.7562 10.2402L15.1683 8.9612L15.6471 10.2163L16.9161 10.6316L15.6708 11.1143L15.2587 12.3932L14.7799 11.1381L13.5109 10.7228Z" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", { id: "clip0", children: /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "24.0006", height: "25" }) }) })
        ]
      }
    );
  };
  const useHelpStyle = styles.makeStyles((theme) => ({
    onDarkBackground: {
      "&:hover": {
        backgroundColor: styles.emphasize(theme.palette.secondary.main, 0.08)
      }
    }
  }));
  const Help = () => {
    const classes = useHelpStyle();
    return /* @__PURE__ */ jsxRuntime.jsx(Link, { href: "https://www.eclipse.org/sirius", rel: "noopener noreferrer", target: "_blank", color: "inherit", children: /* @__PURE__ */ jsxRuntime.jsx(IconButton, { className: classes.onDarkBackground, color: "inherit", children: /* @__PURE__ */ jsxRuntime.jsx(HelpIcon, {}) }) });
  };
  const NavigationBarIcon = ({}) => /* @__PURE__ */ jsxRuntime.jsx(SiriusIcon, { fontSize: "large" });
  const NavigationBarMenu = ({}) => /* @__PURE__ */ jsxRuntime.jsx(Help, {});
  const navigationBarIconExtensionPoint = {
    identifier: "navigationBar#icon",
    FallbackComponent: NavigationBarIcon
  };
  const navigationBarMenuExtensionPoint = {
    identifier: "navigationBar#menu",
    FallbackComponent: NavigationBarMenu
  };
  const useNavigationBarStyles = styles.makeStyles((theme) => ({
    navbar: {
      display: "flex",
      flexDirection: "column"
    },
    appBarHeader: {
      height: "4px",
      backgroundColor: theme.palette.navigationBar.border
    },
    toolbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: theme.palette.navigationBar.background
    },
    left: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    link: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    right: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end"
    },
    onDarkBackground: {
      "&:hover": {
        backgroundColor: styles.emphasize(theme.palette.secondary.main, 0.08)
      }
    }
  }));
  const NavigationBar = ({ children }) => {
    const classes = useNavigationBarStyles();
    const { Component: Icon } = siriusComponentsCore.useComponent(navigationBarIconExtensionPoint);
    const { Component: Menu2 } = siriusComponentsCore.useComponent(navigationBarMenuExtensionPoint);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.navbar, children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.appBarHeader }),
      /* @__PURE__ */ jsxRuntime.jsx(AppBar, { position: "static", children: /* @__PURE__ */ jsxRuntime.jsxs(Toolbar, { className: classes.toolbar, variant: "dense", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.left, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip, { title: "Back to the homepage", children: /* @__PURE__ */ jsxRuntime.jsx(Link, { component: reactRouterDom.Link, to: "/", className: classes.link, color: "inherit", children: /* @__PURE__ */ jsxRuntime.jsx(IconButton, { className: classes.onDarkBackground, color: "inherit", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, {}) }) }) }) }),
        children,
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.right, children: /* @__PURE__ */ jsxRuntime.jsx(Menu2, {}) })
      ] }) })
    ] });
  };
  const applyProfileModalMachine = xstate.Machine(
    {
      id: "ApplyProfileModal",
      type: "parallel",
      context: {
        selectedProfileId: "",
        profiles: [],
        message: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        applyProfileModal: {
          initial: "loading",
          states: {
            loading: {
              on: {
                HANDLE_FETCHED_PROFILES: [
                  {
                    target: "valid",
                    actions: "updateProfiles"
                  }
                ]
              }
            },
            valid: {
              on: {
                CHANGE_PROFILE: [
                  {
                    actions: "updateProfile"
                  }
                ],
                APPLY_PROFILE: [
                  {
                    target: "applyingProfile"
                  }
                ]
              }
            },
            applyingProfile: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    target: "success"
                  },
                  {
                    target: "valid"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.applyProfile.__typename === "ApplyProfileSuccessPayload";
        }
      },
      actions: {
        updateProfiles: xstate.assign((_, event2) => {
          const { data } = event2;
          const { profileMetadatas: profiles } = data.viewer;
          const selectedProfileId = profiles.length > 0 ? profiles[0].uriPath : "";
          return { profiles, selectedProfileId };
        }),
        updateProfile: xstate.assign((_, event2) => {
          const { profileId } = event2;
          return { selectedProfileId: profileId };
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const applyProfileMutation = client.gql`
  mutation applyProfile($input: ApplyProfileInput!) {
    applyProfile(input: $input) {
      __typename
      ... on ApplyProfileSuccessPayload {
        id
      }
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const getUMLProfileMetadatasQuery = client.gql`
  query getUMLProfileMetadatas {
    viewer {
      profileMetadatas {
        label
        uriPath
      }
    }
  }
`;
  const useApplyProfileModalStyles = styles.makeStyles((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(1)
      }
    }
  }));
  const isErrorPayload$c = (payload) => payload.__typename === "ErrorPayload";
  const ApplyProfileModal = ({ editingContextId, item, onAppliedProfile, onClose }) => {
    const classes = useApplyProfileModalStyles();
    const [{ value, context }, dispatch] = react.useMachine(
      applyProfileModalMachine
    );
    const { applyProfileModal, toast } = value;
    const { selectedProfileId, profiles, message } = context;
    const {
      loading: profilesLoading,
      data: profilesData,
      error: profilesError
    } = client.useQuery(getUMLProfileMetadatasQuery, {
      variables: { editingContextId, kind: item.kind }
    });
    React.useEffect(() => {
      if (!profilesLoading) {
        if (profilesError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (profilesData) {
          const fetchProfilesEvent = {
            type: "HANDLE_FETCHED_PROFILES",
            data: profilesData
          };
          dispatch(fetchProfilesEvent);
        }
      }
    }, [profilesLoading, profilesData, profilesError, dispatch]);
    const onProfileChange = (event2) => {
      const value2 = event2.target.value;
      const changeProfileEvent = {
        type: "CHANGE_PROFILE",
        profileId: value2
      };
      dispatch(changeProfileEvent);
    };
    const [applyProfile, { loading: applyProfileLoading, data: applyProfileData, error: applyProfileError }] = client.useMutation(applyProfileMutation);
    React.useEffect(() => {
      if (!applyProfileLoading) {
        if (applyProfileError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (applyProfileData) {
          const handleResponseEvent = { type: "HANDLE_RESPONSE", data: applyProfileData };
          dispatch(handleResponseEvent);
          const { applyProfile: applyProfile2 } = applyProfileData;
          if (isErrorPayload$c(applyProfile2)) {
            const { message: message2 } = applyProfile2;
            const showToastEvent = { type: "SHOW_TOAST", message: message2 };
            dispatch(showToastEvent);
          }
        }
      }
    }, [applyProfileLoading, applyProfileData, applyProfileError, dispatch]);
    const onApplyProfile = () => {
      dispatch({ type: "APPLY_PROFILE" });
      const input = {
        id: crypto.randomUUID(),
        editingContextId,
        modelId: item.id,
        profileUriPath: selectedProfileId
      };
      applyProfile({ variables: { input } });
    };
    React.useEffect(() => {
      if (applyProfileModal === "success") {
        onAppliedProfile();
      }
    }, [applyProfileModal, onAppliedProfile]);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        Dialog,
        {
          open: true,
          onClose,
          "aria-labelledby": "dialog-title",
          maxWidth: "xs",
          fullWidth: true,
          "data-testid": "apply-profile-dialog",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", "data-testid": "apply-profile-dialog-title", children: "Apply a profile" }),
            /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { "data-testid": "apply-profile-dialog-content", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.form, children: [
              /* @__PURE__ */ jsxRuntime.jsx(InputLabel, { id: "applyProfileModalProfileLabel", children: "Object type" }),
              /* @__PURE__ */ jsxRuntime.jsx(
                Select,
                {
                  value: selectedProfileId,
                  onChange: onProfileChange,
                  disabled: applyProfileModal === "loading" || applyProfileModal === "applyingProfile",
                  labelId: "applyProfileModalProfileLabel",
                  fullWidth: true,
                  "data-testid": "profile",
                  children: profiles.map((profile) => /* @__PURE__ */ jsxRuntime.jsx(MenuItem, { value: profile.uriPath, children: profile.label }, profile.uriPath))
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "contained",
                disabled: applyProfileModal !== "valid",
                "data-testid": "apply-profile-submit",
                color: "primary",
                onClick: onApplyProfile,
                children: "Apply"
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Snackbar,
        {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
          },
          open: toast === "visible",
          autoHideDuration: 3e3,
          onClose: () => dispatch({ type: "HIDE_TOAST" }),
          message,
          action: /* @__PURE__ */ jsxRuntime.jsx(
            IconButton,
            {
              size: "small",
              "aria-label": "close",
              color: "inherit",
              onClick: () => dispatch({ type: "HIDE_TOAST" }),
              children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon, { fontSize: "small" })
            }
          ),
          "data-testid": "error"
        }
      )
    ] });
  };
  const UMLModelTreeItemContextMenuContribution = React.forwardRef(
    ({ editingContextId, item, readOnly, onClose }, ref) => {
      const [modal, setModal] = React.useState(null);
      const onAppliedProfile = () => {
        onClose();
      };
      let modalElement = null;
      if (modal === "ApplyProfile") {
        modalElement = /* @__PURE__ */ jsxRuntime.jsx(
          ApplyProfileModal,
          {
            editingContextId,
            item,
            onAppliedProfile,
            onClose
          }
        );
      }
      return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          MenuItem,
          {
            "data-testid": "apply-profile",
            onClick: () => setModal("ApplyProfile"),
            ref,
            disabled: readOnly,
            "aria-disabled": true,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(AddIcon, { fontSize: "small" }) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Apply a profile" })
            ]
          },
          "apply-profile"
        ),
        modalElement
      ] }, "umlmodel-tree-item-context-menu-contribution");
    }
  );
  const applyStereotypeModalMachine = xstate.Machine(
    {
      id: "ApplyStereotypesModal",
      type: "parallel",
      context: {
        selectedStereotypeId: "",
        stereotypes: [],
        message: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        applyStereotypeModal: {
          initial: "loading",
          states: {
            loading: {
              on: {
                HANDLE_FETCHED_STEREOTYPES: [
                  {
                    target: "valid",
                    actions: "updateStereotypes"
                  }
                ]
              }
            },
            valid: {
              on: {
                CHANGE_STEREOTYPE: [
                  {
                    actions: "updateStereotype"
                  }
                ],
                APPLY_STEREOTYPE: [
                  {
                    target: "applyingStereotype"
                  }
                ]
              }
            },
            applyingStereotype: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    target: "success"
                  },
                  {
                    target: "valid"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.applyStereotype.__typename === "ApplyStereotypeSuccessPayload";
        }
      },
      actions: {
        updateStereotypes: xstate.assign((_, event2) => {
          const { data } = event2;
          const stereotypes = data.viewer.editingContext.stereotypeMetatadas;
          const selectedStereotypeId = stereotypes.length > 0 ? stereotypes[0].id : "";
          const name = stereotypes.length > 0 ? stereotypes[0].label : "";
          return {
            stereotypes,
            selectedStereotypeId,
            name
          };
        }),
        updateStereotype: xstate.assign((_, event2) => {
          const { stereotypeId } = event2;
          return { selectedStereotypeId: stereotypeId };
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const applyStereotypeMutation = client.gql`
  mutation applyStereotype($input: ApplyStereotypeInput!) {
    applyStereotype(input: $input) {
      __typename
      ... on ApplyStereotypeSuccessPayload {
        id
      }
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const getStereotypesQuery = client.gql`
  query getStereotypes($editingContextId: ID!, $elementId: ID!) {
    viewer {
      editingContext(editingContextId: $editingContextId) {
        stereotypeMetatadas(elementId: $elementId) {
          id
          label
        }
      }
    }
  }
`;
  const useApplyStereotypeModalStyles = styles.makeStyles((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(1)
      }
    }
  }));
  const isErrorPayload$b = (payload) => payload.__typename === "ErrorPayload";
  const ApplyStereotypeModal = ({
    editingContextId,
    item,
    onAppliedStereotype,
    onClose
  }) => {
    const classes = useApplyStereotypeModalStyles();
    const [{ value, context }, dispatch] = react.useMachine(
      applyStereotypeModalMachine
    );
    const { applyStereotypeModal, toast } = value;
    const { selectedStereotypeId, stereotypes, message } = context;
    const {
      loading: stereotypesLoading,
      data: stereotypesData,
      error: stereotypesError
    } = client.useQuery(getStereotypesQuery, {
      variables: { editingContextId, elementId: item.id }
    });
    React.useEffect(() => {
      if (!stereotypesLoading) {
        if (stereotypesError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (stereotypesData) {
          const fetchStereotypesEvent = {
            type: "HANDLE_FETCHED_STEREOTYPES",
            data: stereotypesData
          };
          dispatch(fetchStereotypesEvent);
        }
      }
    }, [stereotypesLoading, stereotypesData, stereotypesError, dispatch]);
    const onStereotypeChange = (event2) => {
      const value2 = event2.target.value;
      const changeStereotypeEvent = {
        type: "CHANGE_STEREOTYPE",
        stereotypeId: value2
      };
      dispatch(changeStereotypeEvent);
    };
    const [applyStereotype, { loading: applyStereotypeLoading, data: applyStereotypeData, error: applyStereotypeError }] = client.useMutation(applyStereotypeMutation);
    React.useEffect(() => {
      if (!applyStereotypeLoading) {
        if (applyStereotypeError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (applyStereotypeData) {
          const handleResponseEvent = { type: "HANDLE_RESPONSE", data: applyStereotypeData };
          dispatch(handleResponseEvent);
          const { applyStereotype: applyStereotype2 } = applyStereotypeData;
          if (isErrorPayload$b(applyStereotype2)) {
            const { message: message2 } = applyStereotype2;
            const showToastEvent = { type: "SHOW_TOAST", message: message2 };
            dispatch(showToastEvent);
          }
        }
      }
    }, [applyStereotypeLoading, applyStereotypeData, applyStereotypeError, dispatch]);
    const onApplyStereotype = () => {
      dispatch({ type: "APPLY_STEREOTYPE" });
      const input = {
        id: crypto.randomUUID(),
        editingContextId,
        elementId: item.id,
        stereotypeId: selectedStereotypeId
      };
      applyStereotype({ variables: { input } });
    };
    React.useEffect(() => {
      console.log(applyStereotypeModal);
      if (applyStereotypeModal === "success") {
        onAppliedStereotype();
      }
    }, [applyStereotypeModal, onAppliedStereotype]);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        Dialog,
        {
          open: true,
          onClose,
          "aria-labelledby": "dialog-title",
          maxWidth: "xs",
          fullWidth: true,
          "data-testid": "apply-stereotype-dialog",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", "data-testid": "apply-stereotype-dialog-title", children: "Apply a new stereotype" }),
            /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { "data-testid": "apply-stereotype-dialog-content", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.form, children: [
              /* @__PURE__ */ jsxRuntime.jsx(InputLabel, { id: "applyStereotypeModalStereotypeLabel", children: "Stereotype" }),
              /* @__PURE__ */ jsxRuntime.jsx(
                Select,
                {
                  value: selectedStereotypeId,
                  onChange: onStereotypeChange,
                  disabled: applyStereotypeModal === "loading" || applyStereotypeModal === "applyingStereotype",
                  labelId: "newDocumentModalStereotypeDescriptionLabel",
                  inputProps: { "data-testid": "stereotype-input" },
                  fullWidth: true,
                  "data-testid": "stereotype",
                  children: stereotypes.map((stereotype) => /* @__PURE__ */ jsxRuntime.jsx(MenuItem, { value: stereotype.id, "data-testid": stereotype.label, children: stereotype.label }, stereotype.id))
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "contained",
                disabled: applyStereotypeModal !== "valid",
                "data-testid": "apply-stereotype-submit",
                color: "primary",
                onClick: onApplyStereotype,
                children: "Apply"
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Snackbar,
        {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
          },
          open: toast === "visible",
          autoHideDuration: 3e3,
          onClose: () => dispatch({ type: "HIDE_TOAST" }),
          message,
          action: /* @__PURE__ */ jsxRuntime.jsx(
            IconButton,
            {
              size: "small",
              "aria-label": "close",
              color: "inherit",
              onClick: () => dispatch({ type: "HIDE_TOAST" }),
              children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon, { fontSize: "small" })
            }
          ),
          "data-testid": "error"
        }
      )
    ] });
  };
  const UMLElementTreeItemContextMenuContribution = React.forwardRef(
    ({ editingContextId, item, readOnly, onClose }, ref) => {
      const [modal, setModal] = React.useState(null);
      const onAppliedStereotype = () => {
        onClose();
      };
      let modalElement = null;
      if (modal === "ApplyStereotype") {
        modalElement = /* @__PURE__ */ jsxRuntime.jsx(
          ApplyStereotypeModal,
          {
            editingContextId,
            item,
            onAppliedStereotype,
            onClose
          }
        );
      }
      return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          MenuItem,
          {
            "data-testid": "apply-stereotype",
            onClick: () => setModal("ApplyStereotype"),
            ref,
            disabled: readOnly,
            "aria-disabled": true,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(AddIcon, { fontSize: "small" }) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Apply a stereotype" })
            ]
          },
          "apply-stereotype"
        ),
        modalElement
      ] }, "umlelement-tree-item-context-menu-contribution");
    }
  );
  const DiagramTreeItemContextMenuContribution = React.forwardRef(
    ({}, _) => {
      return /* @__PURE__ */ jsxRuntime.jsx(React.Fragment, {}, "diagram-tree-item-context-menu-contribution");
    }
  );
  const isCreateRootObjectSuccessPayload = (payload) => {
    return payload.__typename === "CreateRootObjectSuccessPayload";
  };
  const newRootObjectModalMachine = xstate.Machine(
    {
      id: "NewRootObjectModal",
      type: "parallel",
      context: {
        domains: [],
        selectedDomainId: "",
        rootObjectCreationDescriptions: [],
        selectedRootObjectCreationDescriptionId: "",
        suggestedRootObject: true,
        objectToSelect: null,
        message: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        newRootObjectModal: {
          initial: "loadingDomains",
          states: {
            loadingDomains: {
              on: {
                HANDLE_FETCHED_DOMAINS: [
                  {
                    actions: "updateDomains",
                    target: "loadingRootObjectCreationDescriptions"
                  }
                ]
              }
            },
            loadingRootObjectCreationDescriptions: {
              on: {
                HANDLE_FETCHED_ROOT_OBJECT_CREATION_DESCRIPTIONS: [
                  {
                    actions: "updateRootObjectCreationDescriptions",
                    target: "valid"
                  }
                ]
              }
            },
            valid: {
              on: {
                CHANGE_DOMAIN: [
                  {
                    actions: "updateDomain",
                    target: "loadingRootObjectCreationDescriptions"
                  }
                ],
                CHANGE_ROOT_OBJECT_CREATION_DESCRIPTION: [
                  {
                    actions: "updateRootObjectCreationDescription"
                  }
                ],
                CHANGE_SUGGESTED: [
                  {
                    actions: "updateSuggested",
                    target: "loadingRootObjectCreationDescriptions"
                  }
                ],
                CREATE_ROOT_OBJECT: [
                  {
                    target: "creatingRootObject"
                  }
                ]
              }
            },
            creatingRootObject: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    target: "success",
                    actions: "updateObjectToSelect"
                  },
                  {
                    target: "valid"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.createRootObject.__typename === "CreateRootObjectSuccessPayload";
        }
      },
      actions: {
        updateDomains: xstate.assign((_, event2) => {
          const { data } = event2;
          const { domains } = data.viewer.editingContext;
          const selectedDomainId = domains.length > 0 ? domains[0].id : "";
          return { domains, selectedDomainId };
        }),
        updateRootObjectCreationDescriptions: xstate.assign((_, event2) => {
          const { data } = event2;
          const { rootObjectCreationDescriptions } = data.viewer.editingContext;
          const selectedRootObjectCreationDescriptionId = rootObjectCreationDescriptions.length > 0 ? rootObjectCreationDescriptions[0].id : "";
          return { rootObjectCreationDescriptions, selectedRootObjectCreationDescriptionId };
        }),
        updateDomain: xstate.assign((_, event2) => {
          const { domainId } = event2;
          return { selectedDomainId: domainId };
        }),
        updateRootObjectCreationDescription: xstate.assign((_, event2) => {
          const { rootObjectCreationDescriptionId } = event2;
          return { selectedRootObjectCreationDescriptionId: rootObjectCreationDescriptionId };
        }),
        updateSuggested: xstate.assign((_, event2) => {
          const { suggestedRootObject } = event2;
          return { suggestedRootObject };
        }),
        updateObjectToSelect: xstate.assign((_, event2) => {
          const { data } = event2;
          if (isCreateRootObjectSuccessPayload(data.createRootObject)) {
            const { object } = data.createRootObject;
            return { objectToSelect: object };
          }
          return {};
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const createRootObjectMutation = client.gql`
  mutation createRootObject($input: CreateRootObjectInput!) {
    createRootObject(input: $input) {
      __typename
      ... on CreateRootObjectSuccessPayload {
        object {
          id
          label
          kind
        }
      }
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const getRootDomainsQuery = client.gql`
  query getRootDomains($editingContextId: ID!) {
    viewer {
      editingContext(editingContextId: $editingContextId) {
        domains(rootDomainsOnly: true) {
          id
          label
        }
      }
    }
  }
`;
  const getRootObjectCreationDescriptionsQuery = client.gql`
  query getRootObjectCreationDescriptions($editingContextId: ID!, $domainId: ID!, $suggested: Boolean!) {
    viewer {
      editingContext(editingContextId: $editingContextId) {
        rootObjectCreationDescriptions(domainId: $domainId, suggested: $suggested) {
          id
          label
          iconURL
        }
      }
    }
  }
`;
  const useNewRootObjectModalStyles = styles.makeStyles((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(1)
      }
    },
    select: {
      display: "flex",
      alignItems: "center"
    },
    iconRoot: {
      minWidth: theme.spacing(3)
    }
  }));
  const NewRootObjectModal = ({ editingContextId, item, onObjectCreated, onClose }) => {
    const classes = useNewRootObjectModalStyles();
    const [{ value, context }, dispatch] = react.useMachine(
      newRootObjectModalMachine
    );
    const { newRootObjectModal, toast } = value;
    const {
      domains,
      selectedDomainId,
      rootObjectCreationDescriptions,
      selectedRootObjectCreationDescriptionId,
      suggestedRootObject,
      objectToSelect,
      message
    } = context;
    const {
      loading: domainsLoading,
      data: domainsData,
      error: domainsError
    } = client.useQuery(getRootDomainsQuery, {
      variables: { editingContextId }
    });
    React.useEffect(() => {
      if (!domainsLoading) {
        if (domainsError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (domainsData) {
          const fetchDomainsEvent = {
            type: "HANDLE_FETCHED_DOMAINS",
            data: domainsData
          };
          dispatch(fetchDomainsEvent);
        }
      }
    }, [domainsLoading, domainsData, domainsError, dispatch]);
    const [
      getRootObjectCreationDescriptions,
      { loading: descriptionsLoading, data: descriptionsData, error: descriptionError }
    ] = client.useLazyQuery(
      getRootObjectCreationDescriptionsQuery
    );
    React.useEffect(() => {
      if (!descriptionsLoading) {
        if (descriptionError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (descriptionsData) {
          const fetchDescriptionsEvent = {
            type: "HANDLE_FETCHED_ROOT_OBJECT_CREATION_DESCRIPTIONS",
            data: descriptionsData
          };
          dispatch(fetchDescriptionsEvent);
        }
      }
    }, [descriptionsLoading, descriptionsData, descriptionError, dispatch]);
    React.useEffect(() => {
      if (newRootObjectModal === "loadingRootObjectCreationDescriptions" && selectedDomainId) {
        getRootObjectCreationDescriptions({
          variables: { editingContextId, domainId: selectedDomainId, suggested: suggestedRootObject }
        });
      }
    }, [newRootObjectModal, getRootObjectCreationDescriptions, editingContextId, selectedDomainId, suggestedRootObject]);
    const [
      createRootObject,
      { loading: createRootObjectLoading, data: createRootObjectData, error: createRootObjectError }
    ] = client.useMutation(createRootObjectMutation);
    React.useEffect(() => {
      if (!createRootObjectLoading) {
        if (createRootObjectError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (createRootObjectData) {
          const handleResponseEvent = { type: "HANDLE_RESPONSE", data: createRootObjectData };
          dispatch(handleResponseEvent);
        }
      }
    }, [createRootObjectLoading, createRootObjectError, createRootObjectData, dispatch]);
    const onCreateRootObject = () => {
      dispatch({ type: "CREATE_ROOT_OBJECT" });
      const input = {
        id: crypto.randomUUID(),
        editingContextId,
        documentId: item.id,
        domainId: selectedDomainId,
        rootObjectCreationDescriptionId: selectedRootObjectCreationDescriptionId
      };
      createRootObject({ variables: { input } });
    };
    const onDomainChange = (event2) => {
      const { value: value2 } = event2.target;
      const changeDomainEvent = { type: "CHANGE_DOMAIN", domainId: value2 };
      dispatch(changeDomainEvent);
    };
    const onRootObjectCreationDescriptionChange = (event2) => {
      const { value: value2 } = event2.target;
      const changeRootObjectCreationDescriptionEvent = {
        type: "CHANGE_ROOT_OBJECT_CREATION_DESCRIPTION",
        rootObjectCreationDescriptionId: value2
      };
      dispatch(changeRootObjectCreationDescriptionEvent);
    };
    const onSuggestedRootObjectChange = (event2) => {
      const { checked } = event2.target;
      const changeSuggestedRootObject = { type: "CHANGE_SUGGESTED", suggestedRootObject: checked };
      dispatch(changeSuggestedRootObject);
    };
    React.useEffect(() => {
      if (newRootObjectModal === "success") {
        onObjectCreated({ entries: [objectToSelect] });
      }
    }, [newRootObjectModal, onObjectCreated, objectToSelect]);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { open: true, onClose, "aria-labelledby": "dialog-title", maxWidth: "xs", fullWidth: true, children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Create a new root object" }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.form, children: [
          /* @__PURE__ */ jsxRuntime.jsx(InputLabel, { id: "domainsLabel", children: "Domain" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Select,
            {
              value: selectedDomainId,
              onChange: onDomainChange,
              disabled: newRootObjectModal !== "valid",
              labelId: "domainsLabel",
              fullWidth: true,
              "data-testid": "domain",
              children: domains.map((domain) => /* @__PURE__ */ jsxRuntime.jsx(MenuItem, { value: domain.id, children: domain.label }, domain.id))
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(InputLabel, { id: "rootObjectCreationDescriptionsLabel", children: "Object type" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Select,
            {
              classes: { select: classes.select },
              value: selectedRootObjectCreationDescriptionId,
              onChange: onRootObjectCreationDescriptionChange,
              disabled: newRootObjectModal !== "valid",
              labelId: "rootObjectCreationDescriptionsLabel",
              fullWidth: true,
              "data-testid": "type",
              children: rootObjectCreationDescriptions.map((rootObjectCreationDescription) => /* @__PURE__ */ jsxRuntime.jsxs(MenuItem, { value: rootObjectCreationDescription.id, children: [
                rootObjectCreationDescription.iconURL.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { className: classes.iconRoot, children: /* @__PURE__ */ jsxRuntime.jsx(
                  siriusComponentsCore.IconOverlay,
                  {
                    iconURL: rootObjectCreationDescription.iconURL,
                    alt: rootObjectCreationDescription.label
                  }
                ) }),
                /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: rootObjectCreationDescription.label })
              ] }, rootObjectCreationDescription.id))
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            FormControlLabel,
            {
              control: /* @__PURE__ */ jsxRuntime.jsx(
                Checkbox,
                {
                  checked: suggestedRootObject,
                  onChange: onSuggestedRootObjectChange,
                  name: "suggested",
                  color: "primary",
                  "data-testid": "suggested"
                }
              ),
              label: "Show only suggested root type"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "contained",
            disabled: newRootObjectModal !== "valid",
            "data-testid": "create-object",
            color: "primary",
            onClick: onCreateRootObject,
            children: "Create"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      )
    ] });
  };
  const DocumentTreeItemContextMenuContribution = React.forwardRef(
    ({ editingContextId, item, readOnly, expandItem, onClose }, ref) => {
      const { httpOrigin } = React.useContext(siriusComponentsCore.ServerContext);
      const [modal, setModal] = React.useState(null);
      const { setSelection } = siriusComponentsCore.useSelection();
      const onObjectCreated = (selection) => {
        setSelection(selection);
        expandItem();
        onClose();
      };
      let modalElement = null;
      if (modal === "CreateNewRootObject") {
        modalElement = /* @__PURE__ */ jsxRuntime.jsx(
          NewRootObjectModal,
          {
            editingContextId,
            item,
            onObjectCreated,
            onClose
          }
        );
      }
      return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          MenuItem,
          {
            "data-testid": "new-object",
            onClick: () => setModal("CreateNewRootObject"),
            ref,
            disabled: readOnly,
            "aria-disabled": true,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(AddIcon, { fontSize: "small" }) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "New object" })
            ]
          },
          "new-object"
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          MenuItem,
          {
            divider: true,
            onClick: onClose,
            component: "a",
            href: `${httpOrigin}/api/editingcontexts/${editingContextId}/documents/${item.id}`,
            type: "application/octet-stream",
            "data-testid": "download",
            "aria-disabled": true,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(GetAppIcon, { fontSize: "small" }) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Download", "aria-disabled": true })
            ]
          },
          "download"
        ),
        modalElement
      ] }, "document-tree-item-context-menu-contribution");
    }
  );
  const deleteProjectMutation = client.gql`
  mutation deleteProject($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
      __typename
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const isErrorPayload$a = (payload) => payload.__typename === "ErrorPayload";
  const useDeleteProject = () => {
    const [performProjectDeletion, { loading, data, error }] = client.useMutation(deleteProjectMutation);
    const { addErrorMessage, addMessages } = siriusComponentsCore.useMultiToast();
    React.useEffect(() => {
      if (error) {
        addErrorMessage("An unexpected error has occurred, please refresh the page");
      }
      if (data) {
        const { deleteProject: deleteProject2 } = data;
        if (isErrorPayload$a(deleteProject2)) {
          addMessages(deleteProject2.messages);
        }
      }
    }, [data, error]);
    const deleteProject = (projectId) => {
      const variables = {
        input: {
          id: crypto.randomUUID(),
          projectId
        }
      };
      performProjectDeletion({ variables });
    };
    const projectDeleted = (data == null ? void 0 : data.deleteProject.__typename) === "DeleteProjectSuccessPayload";
    return {
      deleteProject,
      loading,
      projectDeleted
    };
  };
  const DeleteProjectModal = ({ project, onCancel, onSuccess }) => {
    const { deleteProject, loading, projectDeleted } = useDeleteProject();
    const onDeleteProject = (event2) => {
      event2.preventDefault();
      deleteProject(project.id);
    };
    React.useEffect(() => {
      if (projectDeleted) {
        onSuccess();
      }
    }, [projectDeleted, onSuccess]);
    return /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { open: true, onClose: onCancel, "aria-labelledby": "dialog-title", maxWidth: "xs", fullWidth: true, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(DialogTitle, { id: "dialog-title", children: [
        'Delete the project "',
        project.name,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsx(DialogContentText, { children: "This action will delete everything in the project. All data and all representations will be lost. It cannot be reversed." }) }),
      /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: "contained",
          disabled: loading,
          onClick: onDeleteProject,
          color: "primary",
          "data-testid": "delete-project",
          children: "Delete"
        }
      ) })
    ] });
  };
  const renameProjectMutation = client.gql`
  mutation renameProject($input: RenameProjectInput!) {
    renameProject(input: $input) {
      __typename
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const isErrorPayload$9 = (payload) => payload.__typename === "ErrorPayload";
  const useRenameProject = () => {
    const [performProjectRename, { loading, data, error }] = client.useMutation(renameProjectMutation);
    const { addErrorMessage, addMessages } = siriusComponentsCore.useMultiToast();
    React.useEffect(() => {
      if (error) {
        addErrorMessage("An unexpected error has occurred, please refresh the page");
      }
      if (data) {
        const { renameProject: renameProject2 } = data;
        if (isErrorPayload$9(renameProject2)) {
          addMessages(renameProject2.messages);
        }
      }
    }, [data, error]);
    const renameProject = (projectId, newName) => {
      const variables = {
        input: {
          id: crypto.randomUUID(),
          projectId,
          newName
        }
      };
      performProjectRename({ variables });
    };
    const projectRenamed = (data == null ? void 0 : data.renameProject.__typename) === "RenameProjectSuccessPayload";
    return {
      renameProject,
      loading,
      projectRenamed
    };
  };
  const RenameProjectModal = ({ project, onCancel, onSuccess }) => {
    const [state, setState] = React.useState({
      newName: project.name,
      pristine: true
    });
    const onNewName = (event2) => {
      const newName = event2.target.value;
      setState((prevState) => ({ ...prevState, newName, pristine: false }));
    };
    const { renameProject, loading, projectRenamed } = useRenameProject();
    const onRenameProject = (event2) => {
      event2.preventDefault();
      renameProject(project.id, state.newName);
    };
    React.useEffect(() => {
      if (projectRenamed) {
        onSuccess();
      }
    }, [projectRenamed, onSuccess]);
    const nameIsInvalid = !state.pristine && (state.newName.trim().length === 0 || state.newName.trim().length > 1024);
    return /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { open: true, onClose: onCancel, "aria-labelledby": "dialog-title", maxWidth: "xs", fullWidth: true, children: [
      /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Rename the project" }),
      /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsx(
        TextField,
        {
          value: state.newName,
          onChange: onNewName,
          error: nameIsInvalid,
          helperText: "The name is required and must contain less than 1024 characters",
          label: "Name",
          placeholder: "Enter a new project name",
          "data-testid": "rename-textfield",
          autoFocus: true,
          fullWidth: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: "contained",
          disabled: loading,
          onClick: onRenameProject,
          color: "primary",
          "data-testid": "rename-project",
          children: "Rename"
        }
      ) })
    ] });
  };
  const isProjectRenamedEventPayload = (payload) => payload.__typename === "ProjectRenamedEventPayload";
  const editProjectNavbarMachine = xstate.Machine(
    {
      type: "parallel",
      context: {
        id: crypto.randomUUID(),
        to: null,
        modalDisplayed: null,
        projectMenuAnchor: null,
        projectName: null,
        message: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        navbar: {
          initial: "empty",
          states: {
            empty: {
              on: {
                HANDLE_SHOW_CONTEXT_MENU_EVENT: {
                  target: "contextualMenuDisplayedState",
                  actions: "showContextMenu"
                },
                HANDLE_SUBSCRIPTION_RESULT: {
                  actions: "handleSubscriptionResult"
                },
                HANDLE_COMPLETE: {
                  target: "complete"
                }
              }
            },
            contextualMenuDisplayedState: {
              on: {
                HANDLE_CLOSE_CONTEXT_MENU_EVENT: {
                  target: "empty",
                  actions: "closeContextMenu"
                },
                HANDLE_SHOW_MODAL_EVENT: {
                  target: "modalDisplayedState",
                  actions: "showModal"
                },
                HANDLE_SUBSCRIPTION_RESULT: {
                  actions: "handleSubscriptionResult"
                }
              }
            },
            modalDisplayedState: {
              on: {
                HANDLE_CLOSE_MODAL_EVENT: {
                  target: "empty",
                  actions: "closeModal"
                },
                HANDLE_REDIRECTING_EVENT: {
                  target: "redirectState",
                  actions: "redirecting"
                },
                HANDLE_SUBSCRIPTION_RESULT: {
                  actions: "handleSubscriptionResult"
                }
              }
            },
            redirectState: {
              type: "final"
            },
            complete: {
              type: "final"
            }
          }
        }
      }
    },
    {
      actions: {
        showContextMenu: xstate.assign((_, event2) => {
          const { projectMenuAnchor } = event2;
          return { projectMenuAnchor };
        }),
        hideContextMenu: xstate.assign((_) => {
          return { projectMenuAnchor: null };
        }),
        showModal: xstate.assign((_, event2) => {
          const { modalName } = event2;
          return { projectMenuAnchor: null, modalDisplayed: modalName };
        }),
        closeModal: xstate.assign((_) => {
          return { modalDisplayed: null };
        }),
        redirecting: xstate.assign((_, event2) => {
          const { to } = event2;
          return { to, projectMenuAnchor: null, modalDisplayed: null };
        }),
        handleSubscriptionResult: xstate.assign((_, event2) => {
          const { result } = event2;
          const { data } = result;
          if (isProjectRenamedEventPayload(data.projectEvent)) {
            const { newName } = data.projectEvent;
            return {
              projectName: newName
            };
          }
          return {};
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const projectEventSubscription = client.gql`
  subscription projectEvent($input: ProjectEventInput!) {
    projectEvent(input: $input) {
      __typename
      ... on ProjectRenamedEventPayload {
        projectId
        newName
      }
    }
  }
`;
  const useEditProjectViewNavbarStyles = styles.makeStyles((theme) => ({
    center: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    title: {
      marginRight: theme.spacing(2),
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "100ch"
    },
    onDarkBackground: {
      "&:hover": {
        backgroundColor: styles.emphasize(theme.palette.secondary.main, 0.08)
      }
    }
  }));
  const EditProjectNavbar = ({ project }) => {
    const classes = useEditProjectViewNavbarStyles();
    const { httpOrigin } = React.useContext(siriusComponentsCore.ServerContext);
    const [{ value, context }, dispatch] = react.useMachine(
      editProjectNavbarMachine,
      {
        context: {
          projectName: project.name
        }
      }
    );
    const { toast, navbar } = value;
    const { id, to, modalDisplayed, projectMenuAnchor, projectName, message } = context;
    const { error } = client.useSubscription(projectEventSubscription, {
      variables: {
        input: {
          id,
          projectId: project.id
        }
      },
      fetchPolicy: "no-cache",
      skip: navbar === "complete",
      onData: ({ data }) => {
        const handleDataEvent = {
          type: "HANDLE_SUBSCRIPTION_RESULT",
          result: data
        };
        dispatch(handleDataEvent);
      },
      onComplete: () => {
        const completeEvent = { type: "HANDLE_COMPLETE" };
        dispatch(completeEvent);
      }
    });
    React.useEffect(() => {
      if (error) {
        const { message: message2 } = error;
        const showToastEvent = { type: "SHOW_TOAST", message: message2 };
        dispatch(showToastEvent);
      }
    }, [error, dispatch]);
    const onMoreClick = (event2) => {
      if (navbar === "empty") {
        const showContextMenu = {
          type: "HANDLE_SHOW_CONTEXT_MENU_EVENT",
          projectMenuAnchor: event2.currentTarget
        };
        dispatch(showContextMenu);
      }
    };
    const onCloseModal = () => {
      dispatch({ type: "HANDLE_CLOSE_MODAL_EVENT" });
    };
    const onCloseContextMenu = () => {
      dispatch({ type: "HANDLE_CLOSE_CONTEXT_MENU_EVENT" });
    };
    const onProjectDeleted = () => {
      const redirectingEvent = {
        type: "HANDLE_REDIRECTING_EVENT",
        to: "/projects"
      };
      dispatch(redirectingEvent);
    };
    if (navbar === "redirectState") {
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to, push: true });
    }
    let modal = null;
    if (project && navbar === "modalDisplayedState") {
      if (modalDisplayed === "RenameProject") {
        modal = /* @__PURE__ */ jsxRuntime.jsx(RenameProjectModal, { project, onSuccess: onCloseModal, onCancel: onCloseModal });
      } else if (modalDisplayed === "DeleteProject") {
        modal = /* @__PURE__ */ jsxRuntime.jsx(DeleteProjectModal, { project, onSuccess: onProjectDeleted, onCancel: onCloseModal });
      }
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(NavigationBar, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.center, children: [
        /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h6", noWrap: true, className: classes.title, "data-testid": `navbar-${projectName}`, children: projectName }),
        /* @__PURE__ */ jsxRuntime.jsx(
          IconButton,
          {
            className: classes.onDarkBackground,
            edge: "start",
            "aria-label": "more",
            "aria-controls": "more-menu",
            "aria-haspopup": "true",
            onClick: onMoreClick,
            color: "inherit",
            "data-testid": "more",
            children: /* @__PURE__ */ jsxRuntime.jsx(MoreVertIcon, {})
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(
        Menu,
        {
          open: navbar === "contextualMenuDisplayedState",
          anchorEl: projectMenuAnchor,
          "data-testid": "navbar-contextmenu",
          onClose: onCloseContextMenu,
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              MenuItem,
              {
                onClick: () => {
                  const showModal = {
                    type: "HANDLE_SHOW_MODAL_EVENT",
                    modalName: "RenameProject"
                  };
                  dispatch(showModal);
                },
                "data-testid": "rename",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(EditIcon, {}) }),
                  /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Rename" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(
              MenuItem,
              {
                component: "a",
                href: `${httpOrigin}/api/projects/${project == null ? void 0 : project.id}`,
                type: "application/octet-stream",
                onClick: onCloseContextMenu,
                "data-testid": "download-link",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(GetAppIcon, {}) }),
                  /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Download" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(
              MenuItem,
              {
                divider: true,
                component: reactRouterDom.Link,
                to: `/projects/${project == null ? void 0 : project.id}/settings`,
                onClick: onCloseContextMenu,
                "data-testid": "project-settings-link",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(SettingsIcon, {}) }),
                  /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Settings" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(
              MenuItem,
              {
                onClick: () => {
                  const showModal = {
                    type: "HANDLE_SHOW_MODAL_EVENT",
                    modalName: "DeleteProject"
                  };
                  dispatch(showModal);
                },
                "data-testid": "delete",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(DeleteIcon, {}) }),
                  /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Delete" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      ),
      modal
    ] });
  };
  const editProjectViewMachine = xstate.Machine(
    {
      type: "parallel",
      context: {
        project: null,
        representation: null,
        message: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        editProjectView: {
          initial: "loading",
          states: {
            loading: {
              on: {
                HANDLE_FETCHED_PROJECT: [
                  {
                    cond: "isMissing",
                    target: "missing"
                  },
                  {
                    target: "loaded",
                    actions: "updateProject"
                  }
                ]
              }
            },
            loaded: {
              type: "final",
              on: {
                SELECT_REPRESENTATION: {
                  target: "loaded",
                  actions: "selectRepresentation"
                }
              }
            },
            missing: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isMissing: (_, event2) => {
          const { data } = event2;
          return !data.viewer.project;
        }
      },
      actions: {
        updateProject: xstate.assign((_, event2) => {
          const { data } = event2;
          const { project: gQLProject } = data.viewer;
          const { id, name, currentEditingContext } = gQLProject;
          const project = { id, name, currentEditingContext: { id: currentEditingContext.id } };
          let representation = null;
          if (gQLProject.currentEditingContext.representation) {
            representation = {
              id: gQLProject.currentEditingContext.representation.id,
              label: gQLProject.currentEditingContext.representation.label,
              kind: gQLProject.currentEditingContext.representation.kind
            };
          }
          return { project, representation };
        }),
        selectRepresentation: xstate.assign((_, event2) => {
          const { representation } = event2;
          return { representation };
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const isCreateChildSuccessPayload = (payload) => {
    return payload.__typename === "CreateChildSuccessPayload";
  };
  const newObjectModalMachine = xstate.Machine(
    {
      id: "NewObjectModal",
      type: "parallel",
      context: {
        selectedChildCreationDescriptionId: "",
        childCreationDescriptions: [],
        objectToSelect: null
      },
      states: {
        newObjectModal: {
          initial: "loading",
          states: {
            loading: {
              on: {
                HANDLE_FETCHED_CHILD_CREATION_DESCRIPTIONS: [
                  {
                    target: "valid",
                    actions: "updateChildCreationDescriptions"
                  }
                ]
              }
            },
            valid: {
              on: {
                CHANGE_CHILD_CREATION_DESCRIPTION: [
                  {
                    actions: "updateChildCreationDescription"
                  }
                ],
                CREATE_CHILD: [
                  {
                    target: "creatingChild"
                  }
                ]
              }
            },
            creatingChild: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    target: "success",
                    actions: "updateObjectToSelect"
                  },
                  {
                    target: "valid"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.createChild.__typename === "CreateChildSuccessPayload";
        }
      },
      actions: {
        updateChildCreationDescriptions: xstate.assign((_, event2) => {
          const { data } = event2;
          const { childCreationDescriptions } = data.viewer.editingContext;
          const selectedChildCreationDescriptionId = childCreationDescriptions.length > 0 ? childCreationDescriptions[0].id : "";
          return { childCreationDescriptions, selectedChildCreationDescriptionId };
        }),
        updateChildCreationDescription: xstate.assign((_, event2) => {
          const { childCreationDescriptionId } = event2;
          return { selectedChildCreationDescriptionId: childCreationDescriptionId };
        }),
        updateObjectToSelect: xstate.assign((_, event2) => {
          const { data } = event2;
          if (isCreateChildSuccessPayload(data.createChild)) {
            const { object } = data.createChild;
            return { objectToSelect: object };
          }
          return {};
        })
      }
    }
  );
  const createChildMutation = client.gql`
  mutation createChild($input: CreateChildInput!) {
    createChild(input: $input) {
      __typename
      ... on CreateChildSuccessPayload {
        object {
          id
          label
          kind
        }
        messages {
          body
          level
        }
      }
      ... on ErrorPayload {
        messages {
          body
          level
        }
      }
    }
  }
`;
  const getChildCreationDescriptionsQuery = client.gql`
  query getChildCreationDescriptions($editingContextId: ID!, $kind: ID!) {
    viewer {
      editingContext(editingContextId: $editingContextId) {
        childCreationDescriptions(kind: $kind) {
          id
          label
          iconURL
        }
      }
    }
  }
`;
  const useNewObjectModalStyles = styles.makeStyles((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(1)
      }
    },
    select: {
      display: "flex",
      alignItems: "center"
    },
    iconRoot: {
      minWidth: theme.spacing(3)
    }
  }));
  const isErrorPayload$8 = (payload) => payload.__typename === "ErrorPayload";
  const isSuccessPayload = (payload) => payload.__typename === "CreateChildSuccessPayload";
  const NewObjectModal = ({ editingContextId, item, onObjectCreated, onClose }) => {
    const classes = useNewObjectModalStyles();
    const { addErrorMessage, addMessages } = siriusComponentsCore.useMultiToast();
    const [{ value, context }, dispatch] = react.useMachine(newObjectModalMachine);
    const { newObjectModal } = value;
    const { selectedChildCreationDescriptionId, childCreationDescriptions, objectToSelect } = context;
    const {
      loading: childCreationDescriptionsLoading,
      data: childCreationDescriptionsData,
      error: childCreationDescriptionsError
    } = client.useQuery(
      getChildCreationDescriptionsQuery,
      { variables: { editingContextId, kind: item.kind } }
    );
    React.useEffect(() => {
      if (!childCreationDescriptionsLoading) {
        if (childCreationDescriptionsError) {
          addErrorMessage("An unexpected error has occurred, please refresh the page");
        }
        if (childCreationDescriptionsData) {
          const fetchChildCreationDescriptionsEvent = {
            type: "HANDLE_FETCHED_CHILD_CREATION_DESCRIPTIONS",
            data: childCreationDescriptionsData
          };
          dispatch(fetchChildCreationDescriptionsEvent);
        }
      }
    }, [childCreationDescriptionsLoading, childCreationDescriptionsData, childCreationDescriptionsError, dispatch]);
    const onChildCreationDescriptionChange = (event2) => {
      const value2 = event2.target.value;
      const changeChildCreationDescriptionEvent = {
        type: "CHANGE_CHILD_CREATION_DESCRIPTION",
        childCreationDescriptionId: value2
      };
      dispatch(changeChildCreationDescriptionEvent);
    };
    const [createChild, { loading: createChildLoading, data: createChildData, error: createChildError }] = client.useMutation(createChildMutation);
    React.useEffect(() => {
      if (!createChildLoading) {
        if (createChildError) {
          addErrorMessage("An unexpected error has occurred, please refresh the page");
        }
        if (createChildData) {
          const handleResponseEvent = { type: "HANDLE_RESPONSE", data: createChildData };
          dispatch(handleResponseEvent);
          const { createChild: createChild2 } = createChildData;
          if (isErrorPayload$8(createChild2) || isSuccessPayload(createChild2)) {
            const { messages } = createChild2;
            addMessages(messages);
          }
        }
      }
    }, [createChildLoading, createChildData, createChildError, dispatch]);
    const onCreateObject = () => {
      dispatch({ type: "CREATE_CHILD" });
      const input = {
        id: crypto.randomUUID(),
        editingContextId,
        objectId: item.id,
        childCreationDescriptionId: selectedChildCreationDescriptionId
      };
      createChild({ variables: { input } });
    };
    React.useEffect(() => {
      if (newObjectModal === "success") {
        onObjectCreated({ entries: [objectToSelect] });
      }
    }, [newObjectModal, onObjectCreated, objectToSelect]);
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsxs(
      Dialog,
      {
        open: true,
        onClose,
        "aria-labelledby": "dialog-title",
        maxWidth: "xs",
        fullWidth: true,
        "data-testid": "new-object-modal",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Create a new object" }),
          /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.form, children: [
            /* @__PURE__ */ jsxRuntime.jsx(InputLabel, { id: "newObjectModalChildCreationDescriptionLabel", children: "Object type" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              Select,
              {
                classes: { select: classes.select },
                value: selectedChildCreationDescriptionId,
                onChange: onChildCreationDescriptionChange,
                disabled: newObjectModal === "loading" || newObjectModal === "creatingChild",
                labelId: "newObjectModalChildCreationDescriptionLabel",
                fullWidth: true,
                "data-testid": "childCreationDescription",
                children: childCreationDescriptions.map((childCreationDescription) => /* @__PURE__ */ jsxRuntime.jsxs(MenuItem, { value: childCreationDescription.id, children: [
                  childCreationDescription.iconURL.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { className: classes.iconRoot, children: /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsCore.IconOverlay, { iconURL: childCreationDescription.iconURL, alt: childCreationDescription.label }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: childCreationDescription.label })
                ] }, childCreationDescription.id))
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "contained",
              disabled: newObjectModal !== "valid",
              "data-testid": "create-object",
              color: "primary",
              onClick: onCreateObject,
              children: "Create"
            }
          ) })
        ]
      }
    ) });
  };
  const newRepresentationModalMachine = xstate.Machine(
    {
      id: "NewRepresentationsModal",
      type: "parallel",
      context: {
        name: "",
        nameMessage: "The name cannot be empty",
        nameIsInvalid: false,
        nameHasBeenModified: false,
        selectedRepresentationDescriptionId: "",
        representationDescriptions: [],
        message: null,
        createdRepresentationId: null,
        createdRepresentationLabel: null,
        createdRepresentationKind: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        newRepresentationModal: {
          initial: "loading",
          states: {
            loading: {
              on: {
                HANDLE_FETCHED_REPRESENTATION_CREATION_DESCRIPTIONS: [
                  {
                    target: "valid",
                    actions: "updateRepresentationDescriptions"
                  }
                ]
              }
            },
            invalid: {
              on: {
                CHANGE_NAME: [
                  {
                    cond: "isNameInvalid",
                    target: "invalid",
                    actions: "updateName"
                  },
                  {
                    target: "valid",
                    actions: "updateName"
                  }
                ],
                CHANGE_REPRESENTATION_CREATION_DESCRIPTION: [
                  {
                    actions: "updateRepresentationDescription"
                  }
                ]
              }
            },
            valid: {
              on: {
                CHANGE_NAME: [
                  {
                    cond: "isNameInvalid",
                    target: "invalid",
                    actions: "updateName"
                  },
                  {
                    target: "valid",
                    actions: "updateName"
                  }
                ],
                CHANGE_REPRESENTATION_CREATION_DESCRIPTION: [
                  {
                    actions: "updateRepresentationDescription"
                  }
                ],
                CREATE_REPRESENTATION: [
                  {
                    target: "creatingRepresentation"
                  }
                ]
              }
            },
            creatingRepresentation: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    actions: "updateCreatedRepresentation",
                    target: "success"
                  },
                  {
                    target: "valid"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isNameInvalid: (_, event2) => {
          const { name } = event2;
          return name.trim().length === 0;
        },
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.createRepresentation.__typename === "CreateRepresentationSuccessPayload";
        }
      },
      actions: {
        updateRepresentationDescriptions: xstate.assign((_, event2) => {
          const { data } = event2;
          const representationDescriptions = new Array();
          data.viewer.editingContext.representationDescriptions.edges.forEach(
            (edge) => representationDescriptions.push(edge.node)
          );
          const selectedRepresentationDescriptionId = representationDescriptions.length > 0 ? representationDescriptions.sort((a, b) => a.label.localeCompare(b.label))[0].id : "";
          const name = representationDescriptions.length > 0 ? representationDescriptions.sort((a, b) => a.label.localeCompare(b.label))[0].defaultName : "";
          return {
            representationDescriptions,
            selectedRepresentationDescriptionId,
            name,
            nameIsInvalid: name.trim().length === 0
          };
        }),
        updateName: xstate.assign((_, event2) => {
          const { name } = event2;
          return { name, nameIsInvalid: name.trim().length === 0, nameHasBeenModified: true };
        }),
        updateRepresentationDescription: xstate.assign((context, event2) => {
          const { representationDescriptionId } = event2;
          if (!context.nameHasBeenModified) {
            const name = context.representationDescriptions.filter(
              (representationDescription) => representationDescription.id === representationDescriptionId
            )[0].defaultName;
            return { selectedRepresentationDescriptionId: representationDescriptionId, name };
          }
          return { selectedRepresentationDescriptionId: representationDescriptionId };
        }),
        updateCreatedRepresentation: xstate.assign((_, event2) => {
          const { data } = event2;
          const createRepresentation = data.createRepresentation;
          return {
            createdRepresentationId: createRepresentation.representation.id,
            createdRepresentationLabel: createRepresentation.representation.label,
            createdRepresentationKind: createRepresentation.representation.kind
          };
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const createRepresentationMutation = client.gql`
  mutation createRepresentation($input: CreateRepresentationInput!) {
    createRepresentation(input: $input) {
      __typename
      ... on CreateRepresentationSuccessPayload {
        representation {
          id
          label
          kind
          __typename
        }
      }
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const getRepresentationDescriptionsQuery = client.gql`
  query getRepresentationDescriptions($editingContextId: ID!, $objectId: ID!) {
    viewer {
      editingContext(editingContextId: $editingContextId) {
        representationDescriptions(objectId: $objectId) {
          edges {
            node {
              id
              label
              defaultName
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    }
  }
`;
  const useNewRepresentationModalStyles = styles.makeStyles((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(1)
      }
    }
  }));
  const isErrorPayload$7 = (payload) => payload.__typename === "ErrorPayload";
  const NewRepresentationModal = ({
    editingContextId,
    item,
    onRepresentationCreated,
    onClose
  }) => {
    const classes = useNewRepresentationModalStyles();
    const [{ value, context }, dispatch] = react.useMachine(
      newRepresentationModalMachine
    );
    const { newRepresentationModal, toast } = value;
    const {
      name,
      nameMessage,
      nameIsInvalid,
      selectedRepresentationDescriptionId,
      representationDescriptions,
      createdRepresentationId,
      createdRepresentationLabel,
      createdRepresentationKind,
      message
    } = context;
    const {
      loading: representationDescriptionsLoading,
      data: representationDescriptionsData,
      error: representationDescriptionsError
    } = client.useQuery(
      getRepresentationDescriptionsQuery,
      { variables: { editingContextId, objectId: item.id } }
    );
    React.useEffect(() => {
      if (!representationDescriptionsLoading) {
        if (representationDescriptionsError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (representationDescriptionsData) {
          const fetchRepresentationDescriptionsEvent = {
            type: "HANDLE_FETCHED_REPRESENTATION_CREATION_DESCRIPTIONS",
            data: representationDescriptionsData
          };
          dispatch(fetchRepresentationDescriptionsEvent);
        }
      }
    }, [representationDescriptionsLoading, representationDescriptionsData, representationDescriptionsError, dispatch]);
    const onNameChange = (event2) => {
      const value2 = event2.target.value;
      const changeNamedEvent = { type: "CHANGE_NAME", name: value2 };
      dispatch(changeNamedEvent);
    };
    const onRepresentationDescriptionChange = (event2) => {
      const value2 = event2.target.value;
      const changeRepresentationDescriptionEvent = {
        type: "CHANGE_REPRESENTATION_CREATION_DESCRIPTION",
        representationDescriptionId: value2
      };
      dispatch(changeRepresentationDescriptionEvent);
    };
    const [
      createRepresentation,
      { loading: createRepresentationLoading, data: createRepresentationData, error: createRepresentationError }
    ] = client.useMutation(createRepresentationMutation);
    React.useEffect(() => {
      if (!createRepresentationLoading) {
        if (createRepresentationError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (createRepresentationData) {
          const handleResponseEvent = { type: "HANDLE_RESPONSE", data: createRepresentationData };
          dispatch(handleResponseEvent);
          const { createRepresentation: createRepresentation2 } = createRepresentationData;
          if (isErrorPayload$7(createRepresentation2)) {
            const { message: message2 } = createRepresentation2;
            const showToastEvent = { type: "SHOW_TOAST", message: message2 };
            dispatch(showToastEvent);
          }
        }
      }
    }, [createRepresentationLoading, createRepresentationData, createRepresentationError, dispatch]);
    const onCreateRepresentation = () => {
      dispatch({ type: "CREATE_REPRESENTATION" });
      const input = {
        id: crypto.randomUUID(),
        editingContextId,
        objectId: item.id,
        representationDescriptionId: selectedRepresentationDescriptionId,
        representationName: name
      };
      createRepresentation({ variables: { input } });
    };
    React.useEffect(() => {
      if (newRepresentationModal === "success") {
        onRepresentationCreated({
          entries: [
            {
              id: createdRepresentationId,
              label: createdRepresentationLabel,
              kind: createdRepresentationKind
            }
          ]
        });
      }
    }, [
      createdRepresentationId,
      createdRepresentationKind,
      createdRepresentationLabel,
      newRepresentationModal,
      onRepresentationCreated
    ]);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { open: true, onClose, "aria-labelledby": "dialog-title", maxWidth: "xs", fullWidth: true, children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Create a new representation" }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.form, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            TextField,
            {
              error: nameIsInvalid,
              helperText: nameMessage,
              label: "Name",
              name: "name",
              value: name,
              placeholder: "Enter the name of the representation",
              inputProps: { "data-testid": "name" },
              autoFocus: true,
              onChange: onNameChange,
              disabled: newRepresentationModal === "loading" || newRepresentationModal === "creatingRepresentation"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(InputLabel, { id: "newRepresentationModalRepresentationDescriptionLabel", children: "Representation type" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Select,
            {
              value: selectedRepresentationDescriptionId,
              onChange: onRepresentationDescriptionChange,
              disabled: newRepresentationModal === "loading" || newRepresentationModal === "creatingRepresentation",
              labelId: "newDocumentModalStereotypeDescriptionLabel",
              inputProps: { "data-testid": "representationDescription-input" },
              fullWidth: true,
              "data-testid": "representationDescription",
              children: representationDescriptions.sort((a, b) => a.label.localeCompare(b.label)).map((representationDescription) => /* @__PURE__ */ jsxRuntime.jsx(
                MenuItem,
                {
                  value: representationDescription.id,
                  "data-testid": representationDescription.label,
                  children: representationDescription.label
                },
                representationDescription.id
              ))
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "contained",
            disabled: newRepresentationModal !== "valid",
            "data-testid": "create-representation",
            color: "primary",
            onClick: onCreateRepresentation,
            children: "Create"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      )
    ] });
  };
  const publishProfileMutation = client.gql`
  mutation publishProfile($input: PublishProfileInput!) {
    publishProfile(input: $input) {
      __typename
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const getProfileLastVersion = client.gql`
  query getProfileLastVersion($editingContextId: ID!, $profileId: ID!) {
    viewer {
      editingContext(editingContextId: $editingContextId) {
        profileLastVersion(profileId: $profileId) {
          major
          minor
          micro
        }
      }
    }
  }
`;
  const usePublishProfileDialogStyles = styles.makeStyles((theme) => ({
    content: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(3)
    },
    main: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr",
      gap: theme.spacing(4)
    },
    version: {
      display: "flex",
      flexDirection: "column"
    },
    versionEntries: {
      display: "grid",
      gridTemplateRows: "repeat(4, 1fr)",
      gridTemplateColumns: "3fr 1fr",
      gap: theme.spacing(1)
    },
    info: {},
    comments: {},
    copyright: {}
  }));
  const PublishProfileDialog = ({ editingContextId, item, onClose }) => {
    var _a, _b;
    const classes = usePublishProfileDialogStyles();
    const [state, setState] = React.useState({
      customVersion: "0.0.0",
      selectedNewVersionKind: "Development",
      date: "",
      author: "",
      comments: "",
      copyright: "",
      message: null
    });
    React.useEffect(() => {
      const currentDate = /* @__PURE__ */ new Date();
      const year = currentDate.toLocaleString("default", { year: "numeric" });
      const month = currentDate.toLocaleString("default", { month: "2-digit" });
      const day = currentDate.toLocaleString("default", { day: "2-digit" });
      setState((prevState) => ({
        ...prevState,
        date: `${year}-${month}-${day}`
      }));
    }, []);
    const onDateChange = (event2) => {
      const {
        target: { value }
      } = event2;
      setState((prevState) => ({
        ...prevState,
        date: value
      }));
    };
    let currentVersion = "Loading...";
    let newDevVersion = "Loading...";
    let newReleaseVersion = "Loading...";
    let newMajorVersion = "Loading...";
    const {
      loading: loadingQuery,
      error: errorQuery,
      data: dataQuery
    } = client.useQuery(getProfileLastVersion, {
      variables: { editingContextId, profileId: item.id }
    });
    if ((_b = (_a = dataQuery == null ? void 0 : dataQuery.viewer) == null ? void 0 : _a.editingContext) == null ? void 0 : _b.profileLastVersion) {
      const { major, minor, micro } = dataQuery.viewer.editingContext.profileLastVersion;
      currentVersion = `${major}.${minor}.${micro}`;
      newDevVersion = `${major}.${minor}.${micro + 1}`;
      newReleaseVersion = `${major}.${minor + 1}.0`;
      newMajorVersion = `${major + 1}.0.0`;
    }
    React.useEffect(() => {
      var _a2, _b2;
      if (!loadingQuery) {
        if (errorQuery) {
          setState((prevState) => ({ ...prevState, message: errorQuery.message }));
        } else if (!((_b2 = (_a2 = dataQuery == null ? void 0 : dataQuery.viewer) == null ? void 0 : _a2.editingContext) == null ? void 0 : _b2.profileLastVersion)) {
          setState((prevState) => ({ ...prevState, message: "Failed to retrieve the current version of the profile" }));
        }
      }
    }, [loadingQuery, dataQuery, errorQuery]);
    const onChange = (name, event2) => {
      const {
        target: { value }
      } = event2;
      setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const onCheckboxChange = (versionKind) => {
      setState((prevState) => ({ ...prevState, selectedNewVersionKind: versionKind }));
    };
    const isPublishEnabled = () => {
      var _a2, _b2;
      let valid = !loadingQuery && ((_b2 = (_a2 = dataQuery == null ? void 0 : dataQuery.viewer) == null ? void 0 : _a2.editingContext) == null ? void 0 : _b2.profileLastVersion) !== null;
      if (valid && state.selectedNewVersionKind === "Custom") {
        const versions = state.customVersion.split(".");
        valid = versions.length === 3 && isCorrectDigit(versions[0]) && isCorrectDigit(versions[1]) && isCorrectDigit(versions[2]);
      }
      return valid;
    };
    const isCorrectDigit = (str) => {
      var n = Math.floor(Number(str));
      return n !== Infinity && String(n) === str && n >= 0;
    };
    const [publishProfile, { data, error }] = client.useMutation(
      publishProfileMutation
    );
    React.useEffect(() => {
      if (error)
        setState((prevState) => ({ ...prevState, message: error.message }));
      if (data && data.publishProfile.__typename === "ErrorPayload") {
        const errorPayload = data.publishProfile;
        setState((prevState) => ({ ...prevState, message: errorPayload.message }));
      } else if (data && data.publishProfile.__typename === "PublishProfileSuccessPayload") {
        onClose();
      }
    }, [data, error, onClose]);
    const handlePublishProfile = () => {
      let version;
      if (state.selectedNewVersionKind === "Development") {
        version = newDevVersion;
      } else if (state.selectedNewVersionKind === "Release") {
        version = newReleaseVersion;
      } else if (state.selectedNewVersionKind === "Major") {
        version = newMajorVersion;
      } else {
        version = state.customVersion;
      }
      const variables = {
        input: {
          id: crypto.randomUUID(),
          editingContextId,
          objectId: item.id,
          version,
          comment: state.comments,
          copyright: state.copyright,
          author: state.author,
          date: state.date,
          saveOCLConstraint: true
        }
      };
      publishProfile({ variables });
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { open: true, onClose, maxWidth: "md", fullWidth: true, "data-testid": "publish-profile-dialog", children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { children: "Publish the profile" }),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogContent, { className: classes.content, children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.main, children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.version, children: [
              /* @__PURE__ */ jsxRuntime.jsx(Typography, { gutterBottom: true, children: "Version" }),
              /* @__PURE__ */ jsxRuntime.jsxs(Typography, { variant: "caption", children: [
                "previous version: ",
                currentVersion
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.versionEntries, children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  FormControlLabel,
                  {
                    control: /* @__PURE__ */ jsxRuntime.jsx(
                      Checkbox,
                      {
                        name: "custom",
                        color: "primary",
                        checked: state.selectedNewVersionKind === "Development",
                        onChange: (_) => onCheckboxChange("Development")
                      }
                    ),
                    label: "Development version"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(Typography, { children: newDevVersion }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  FormControlLabel,
                  {
                    control: /* @__PURE__ */ jsxRuntime.jsx(
                      Checkbox,
                      {
                        name: "custom",
                        color: "primary",
                        checked: state.selectedNewVersionKind === "Release",
                        onChange: (_) => onCheckboxChange("Release")
                      }
                    ),
                    label: "Release version"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(Typography, { children: newReleaseVersion }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  FormControlLabel,
                  {
                    control: /* @__PURE__ */ jsxRuntime.jsx(
                      Checkbox,
                      {
                        name: "custom",
                        color: "primary",
                        checked: state.selectedNewVersionKind === "Major",
                        onChange: (_) => onCheckboxChange("Major")
                      }
                    ),
                    label: "Major release"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(Typography, { children: newMajorVersion }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  FormControlLabel,
                  {
                    control: /* @__PURE__ */ jsxRuntime.jsx(
                      Checkbox,
                      {
                        name: "custom",
                        color: "primary",
                        checked: state.selectedNewVersionKind === "Custom",
                        onChange: (_) => onCheckboxChange("Custom")
                      }
                    ),
                    label: "Custom"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  TextField,
                  {
                    variant: "outlined",
                    margin: "dense",
                    value: state.customVersion,
                    onChange: (event2) => onChange("customVersion", event2),
                    fullWidth: true,
                    disabled: state.selectedNewVersionKind !== "Custom"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.info, children: [
              /* @__PURE__ */ jsxRuntime.jsx(Typography, { gutterBottom: true, children: "Info" }),
              /* @__PURE__ */ jsxRuntime.jsx(
                TextField,
                {
                  id: "date",
                  label: "Date",
                  type: "date",
                  defaultValue: state.date,
                  onChange: onDateChange,
                  InputLabelProps: {
                    shrink: true
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                TextField,
                {
                  "data-testid": "publish-profile-author",
                  label: "Author",
                  value: state.author,
                  onChange: (event2) => onChange("author", event2),
                  fullWidth: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.comments, children: /* @__PURE__ */ jsxRuntime.jsx(
            TextField,
            {
              "data-testid": "publish-profile-comment",
              label: "Comments",
              value: state.comments,
              onChange: (event2) => onChange("comments", event2),
              multiline: true,
              minRows: 4,
              fullWidth: true
            }
          ) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.copyright, children: /* @__PURE__ */ jsxRuntime.jsx(
            TextField,
            {
              "data-testid": "publish-profile-copyright",
              label: "Copyright",
              value: state.copyright,
              onChange: (event2) => onChange("copyright", event2),
              multiline: true,
              minRows: 4,
              fullWidth: true
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogActions, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: onClose, variant: "contained", color: "secondary", children: "Cancel" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              "data-testid": "publish-profile-publish",
              onClick: handlePublishProfile,
              variant: "contained",
              color: "primary",
              disabled: !isPublishEnabled(),
              children: "Publish"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Snackbar,
        {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
          },
          open: !!state.message,
          autoHideDuration: 3e3,
          onClose: () => setState((prevState) => ({ ...prevState, message: null })),
          message: state.message,
          action: /* @__PURE__ */ jsxRuntime.jsx(
            IconButton,
            {
              size: "small",
              "aria-label": "close",
              color: "inherit",
              onClick: () => setState((prevState) => ({ ...prevState, message: null })),
              children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon, { fontSize: "small" })
            }
          ),
          "data-testid": "error"
        }
      )
    ] });
  };
  const ObjectTreeItemContextMenuContribution = React.forwardRef(
    ({ editingContextId, item, readOnly, expandItem, onClose }, ref) => {
      const [modal, setModal] = React.useState(null);
      const { setSelection } = siriusComponentsCore.useSelection();
      const onObjectCreated = (selection) => {
        setSelection(selection);
        expandItem();
        onClose();
      };
      let modalElement = null;
      if (modal === "CreateNewObject") {
        modalElement = /* @__PURE__ */ jsxRuntime.jsx(
          NewObjectModal,
          {
            editingContextId,
            item,
            onObjectCreated,
            onClose
          }
        );
      } else if (modal === "CreateNewRepresentation") {
        modalElement = /* @__PURE__ */ jsxRuntime.jsx(
          NewRepresentationModal,
          {
            editingContextId,
            item,
            onRepresentationCreated: onObjectCreated,
            onClose
          }
        );
      } else if (modal === "PublishProfile") {
        modalElement = /* @__PURE__ */ jsxRuntime.jsx(PublishProfileDialog, { editingContextId, item, onClose });
      }
      let applyProfileMenuItem = null;
      if (item.kind === "siriusComponents://semantic?domain=uml&entity=Profile") {
        applyProfileMenuItem = /* @__PURE__ */ jsxRuntime.jsxs(
          MenuItem,
          {
            "data-testid": "publish-profile",
            onClick: () => setModal("PublishProfile"),
            disabled: readOnly,
            "aria-disabled": true,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(AddIcon, { fontSize: "small" }) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Publish profile" })
            ]
          },
          "publish-profile"
        );
      }
      return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          MenuItem,
          {
            onClick: () => setModal("CreateNewObject"),
            "data-testid": "new-object",
            disabled: readOnly,
            ref,
            "aria-disabled": true,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(AddIcon, { fontSize: "small" }) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "New object" })
            ]
          },
          "new-object"
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          MenuItem,
          {
            onClick: () => setModal("CreateNewRepresentation"),
            "data-testid": "new-representation",
            disabled: readOnly,
            "aria-disabled": true,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(AddIcon, { fontSize: "small" }) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "New representation" })
            ]
          },
          "new-representation"
        ),
        applyProfileMenuItem,
        modalElement
      ] }, "object-tree-item-context-menu-contribution");
    }
  );
  const useFilterBarStyles = styles.makeStyles((theme) => ({
    filterbar: {
      display: "flex",
      flexDirection: "row",
      overflow: "hidden"
    },
    textfield: {
      height: theme.spacing(3),
      fontSize: theme.typography.fontSize
    },
    placeHolderIcon: {
      color: theme.palette.text.disabled
    }
  }));
  const ModelBrowserFilterBar = ({ onTextChange, onTextClear, text, onFocus }) => {
    const classes = useFilterBarStyles();
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.filterbar, children: /* @__PURE__ */ jsxRuntime.jsx(
      TextField,
      {
        id: "filterbar-textfield",
        "data-testid": "filterbar-textfield",
        name: "filterbar-textfield",
        placeholder: "Type to filter",
        spellCheck: false,
        size: "small",
        margin: "none",
        autoFocus: onFocus,
        multiline: false,
        fullWidth: true,
        value: text,
        onChange: onTextChange,
        InputProps: {
          startAdornment: /* @__PURE__ */ jsxRuntime.jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsxRuntime.jsx(SearchIcon, { fontSize: "small", className: classes.placeHolderIcon }) }),
          endAdornment: /* @__PURE__ */ jsxRuntime.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntime.jsx(IconButton, { "data-testid": "filterbar-clear-button", "aria-label": "clear", size: "small", onClick: onTextClear, children: /* @__PURE__ */ jsxRuntime.jsx(ClearIcon, { fontSize: "small" }) }) }),
          className: classes.textfield
        }
      }
    ) });
  };
  const useStyles$1 = styles.makeStyles((theme) => ({
    selectable: {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.palette.action.hover
      },
      userSelect: "none"
    },
    selected: {
      cursor: "pointer",
      backgroundColor: theme.palette.action.selected,
      userSelect: "none"
    },
    selectedLabel: {
      fontWeight: "bold"
    },
    title: {
      opacity: 0.6,
      fontSize: theme.typography.caption.fontSize
    },
    borderStyle: {
      border: "1px solid",
      borderColor: theme.palette.grey[500],
      height: 300,
      overflow: "auto"
    }
  }));
  const useLabelStyles = styles.makeStyles((theme) => ({
    highlight: {
      backgroundColor: theme.palette.navigation.leftBackground
    }
  }));
  const HighlightedLabel = ({ label, textToHighlight }) => {
    const classes = useLabelStyles();
    let itemLabel;
    const splitLabelWithTextToHighlight = siriusComponentsTrees.splitText(label, textToHighlight);
    if (textToHighlight === null || textToHighlight === "" || splitLabelWithTextToHighlight.length === 1 && splitLabelWithTextToHighlight[0].toLocaleLowerCase() !== label.toLocaleLowerCase()) {
      itemLabel = /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: label });
    } else {
      const languages = Array.from(navigator.languages);
      itemLabel = /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: splitLabelWithTextToHighlight.map((value, index) => {
        const shouldHighlight = value.localeCompare(textToHighlight, languages, { sensitivity: "base" }) === 0;
        return /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            "data-testid": `${label}-${value}-${index}`,
            className: shouldHighlight ? classes.highlight : "",
            children: value
          },
          value + index
        );
      }) });
    }
    return /* @__PURE__ */ jsxRuntime.jsx(Typography, { children: itemLabel });
  };
  const FilterableSortableList = ({
    items,
    onClick,
    onDoubleClick,
    selectedItems,
    onFocusFilter
  }) => {
    const classes = useStyles$1();
    const [state, setState] = React.useState({
      filterBarText: "",
      hoveringItemId: void 0,
      draggingItemId: void 0
    });
    const { httpOrigin } = React.useContext(siriusComponentsCore.ServerContext);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        ModelBrowserFilterBar,
        {
          onTextChange: (event2) => setState((prevState) => {
            return {
              ...prevState,
              filterBarText: event2.target.value
            };
          }),
          onTextClear: () => setState((prevState) => {
            return {
              ...prevState,
              filterBarText: ""
            };
          }),
          text: state.filterBarText,
          onFocus: onFocusFilter
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: classes.title, children: "Selected" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.borderStyle, children: /* @__PURE__ */ jsxRuntime.jsx(List$1, { dense: true, component: "div", role: "list", "data-testid": "selected-items-list", children: items.filter(({ label }) => {
        if (state.filterBarText === null || state.filterBarText === "") {
          return true;
        }
        const splitLabelWithTextToHighlight = siriusComponentsTrees.splitText(label, state.filterBarText);
        return splitLabelWithTextToHighlight.length > 1 || splitLabelWithTextToHighlight.length === 1 && splitLabelWithTextToHighlight[0].toLocaleLowerCase() === state.filterBarText.toLocaleLowerCase();
      }).map(({ id, label, iconURL }, _) => {
        const labelId = `transfer-list-item-${id}-label`;
        const selected = selectedItems.some((entry) => entry.id === id);
        return /* @__PURE__ */ jsxRuntime.jsxs(
          ListItem,
          {
            role: "listitem",
            className: selected ? classes.selected : classes.selectable,
            onClick: (event2) => onClick(event2, { id, label, iconURL }),
            onDoubleClick: (_2) => onDoubleClick(),
            "data-testid": label,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(core.ListItemIcon, { children: iconURL ? /* @__PURE__ */ jsxRuntime.jsx("img", { width: "16", height: "16", alt: "", src: httpOrigin + iconURL }) : null }),
              /* @__PURE__ */ jsxRuntime.jsx(
                ListItemText,
                {
                  id: labelId,
                  primary: /* @__PURE__ */ jsxRuntime.jsx(HighlightedLabel, { label, textToHighlight: state.filterBarText })
                }
              )
            ]
          },
          id
        );
      }) }) })
    ] });
  };
  const useStyles = styles.makeStyles((theme) => ({
    dialogContent: {
      overflowX: "hidden"
    },
    root: {
      margin: "auto"
    },
    paper: {
      width: 400,
      height: 370,
      overflow: "auto"
    },
    button: {
      margin: theme.spacing(0.5, 0)
    }
  }));
  const TransferModal = ({ items, onClose }) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      right: [],
      rightSelection: [],
      draggingRightItemId: void 0,
      left: items.map((i) => ({
        id: i.id,
        label: i.name,
        iconURL: i.imagePath
      })),
      leftSelection: []
    });
    const onClick = (event2, item) => {
      const isItemRight = state.right.find((entry) => entry.id === item.id);
      const isItemLeft = state.left.find((entry) => entry.id === item.id);
      if (event2.ctrlKey || event2.metaKey) {
        event2.stopPropagation();
        if (isItemRight) {
          const isItemInSelection = state.rightSelection.find((entry) => entry.id === item.id);
          const newSelection = isItemInSelection ? state.rightSelection.filter((entry) => entry.id !== item.id) : [...state.rightSelection, item];
          setState((prevState) => {
            return {
              ...prevState,
              rightSelection: newSelection,
              leftSelection: []
            };
          });
        } else if (isItemLeft) {
          const isItemInSelection = state.leftSelection.find((entry) => entry.id === item.id);
          const newSelection = isItemInSelection ? state.leftSelection.filter((entry) => entry.id !== item.id) : [...state.leftSelection, item];
          setState((prevState) => {
            return {
              ...prevState,
              rightSelection: [],
              leftSelection: newSelection
            };
          });
        }
      } else {
        setState((prevState) => {
          return {
            ...prevState,
            rightSelection: isItemRight ? [item] : [],
            leftSelection: isItemLeft ? [item] : []
          };
        });
      }
    };
    const handleDispatchRight = () => {
      setState((prevState) => {
        return {
          ...prevState,
          right: prevState.right.concat(
            prevState.leftSelection.filter(
              (newEntry) => !prevState.right.some((existingEntry) => existingEntry.id === newEntry.id)
            )
          ).sort((o1, o2) => o1.label.localeCompare(o2.label)),
          left: prevState.left.filter(
            (newEntry) => !prevState.leftSelection.some((existingEntry) => existingEntry.id === newEntry.id)
          ),
          leftSelection: [],
          rightSelection: []
        };
      });
    };
    const handleDispatchLeft = () => {
      setState((prevState) => {
        return {
          ...prevState,
          right: prevState.right.filter(
            (entry) => !prevState.rightSelection.some((selected) => selected.id === entry.id)
          ),
          rightSelection: [],
          left: prevState.left.concat(
            prevState.rightSelection.filter(
              (newEntry) => !prevState.left.some((existingEntry) => existingEntry.id === newEntry.id)
            )
          ).sort((o1, o2) => o1.label.localeCompare(o2.label)),
          leftSelection: []
        };
      });
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Dialog,
      {
        open: true,
        onClose: () => onClose([]),
        "aria-labelledby": "dialog-title",
        maxWidth: false,
        "data-testid": "transfer-modal",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Select Metaclass" }),
          /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { className: classes.dialogContent, children: /* @__PURE__ */ jsxRuntime.jsxs(Grid, { container: true, spacing: 2, justifyContent: "center", alignItems: "center", className: classes.root, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Grid, { item: true, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.paper, children: /* @__PURE__ */ jsxRuntime.jsx(
              FilterableSortableList,
              {
                items: state.left,
                setItems: (items2) => setState((prevState) => {
                  return {
                    ...prevState,
                    left: items2
                  };
                }),
                onClick,
                onDoubleClick: handleDispatchRight,
                selectedItems: state.leftSelection,
                onFocusFilter: true
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntime.jsx(Grid, { item: true, children: /* @__PURE__ */ jsxRuntime.jsxs(Grid, { container: true, direction: "column", alignItems: "center", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                IconButton,
                {
                  className: classes.button,
                  onClick: handleDispatchRight,
                  disabled: !state.leftSelection.some(
                    (leftEntry) => !state.right.some((rightEntry) => rightEntry.id === leftEntry.id)
                  ),
                  "aria-label": "move selected right",
                  "data-testid": "move-right",
                  children: /* @__PURE__ */ jsxRuntime.jsx(ChevronRightIcon, {})
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                IconButton,
                {
                  className: classes.button,
                  onClick: handleDispatchLeft,
                  disabled: !state.rightSelection.some(
                    (rightEntry) => !state.left.some((leftEntry) => leftEntry.id === rightEntry.id)
                  ),
                  "aria-label": "move selected left",
                  "data-testid": "move-left",
                  children: /* @__PURE__ */ jsxRuntime.jsx(ChevronLeftIcon, {})
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsx(Grid, { item: true, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.paper, children: /* @__PURE__ */ jsxRuntime.jsx(
              FilterableSortableList,
              {
                items: state.right,
                setItems: (items2) => setState((prevState) => {
                  return {
                    ...prevState,
                    right: items2
                  };
                }),
                onClick,
                onDoubleClick: handleDispatchLeft,
                selectedItems: state.rightSelection,
                onFocusFilter: false
              }
            ) }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "contained",
              color: "primary",
              type: "button",
              "data-testid": "apply-change",
              onClick: () => {
                onClose(state.right.map((entry) => entry.id));
              },
              children: "Apply"
            }
          ) })
        ]
      }
    );
  };
  const getMetaclassMetadatas = client.gql`
  query getMetaclassMetadatas($editingContextId: ID!) {
    viewer {
      editingContext(editingContextId: $editingContextId) {
        metaclassMetadatas {
          id
          name
          imagePath
        }
      }
    }
  }
`;
  const createMetaclassImportMutation = client.gql`
  mutation createMetaclassImport($input: CreateMetaclassImportInput!) {
    createMetaclassImport(input: $input) {
      __typename
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const PapyrusPopupToolContribution = ({
    diagramElementId,
    x,
    y
  }) => {
    const [modal, setModal] = React.useState(null);
    const { addErrorMessage } = siriusComponentsCore.useMultiToast();
    const { httpOrigin } = React.useContext(siriusComponentsCore.ServerContext);
    const onClose = (selectedElementIds) => {
      setModal(null);
      const variables = {
        input: {
          id: crypto.randomUUID(),
          editingContextId,
          representationId,
          diagramElementId,
          x,
          y,
          metaclassIds: selectedElementIds
        }
      };
      createMetaclassImport({ variables });
    };
    const { projectId: editingContextId, representationId } = reactRouterDom.useParams();
    const [metaclasses, setMetaclasses] = React.useState([{ id: "0", name: "Loading...", imagePath: "" }]);
    const {
      loading: loadingQuery,
      error: errorQuery,
      data: dataQuery
    } = client.useQuery(getMetaclassMetadatas, {
      variables: { editingContextId }
    });
    React.useEffect(() => {
      var _a, _b, _c, _d;
      if ((_b = (_a = dataQuery == null ? void 0 : dataQuery.viewer) == null ? void 0 : _a.editingContext) == null ? void 0 : _b.metaclassMetadatas) {
        setMetaclasses(dataQuery.viewer.editingContext.metaclassMetadatas);
      }
      if (!loadingQuery) {
        if (errorQuery) {
          addErrorMessage(errorQuery.message);
        } else if (!((_d = (_c = dataQuery == null ? void 0 : dataQuery.viewer) == null ? void 0 : _c.editingContext) == null ? void 0 : _d.metaclassMetadatas)) {
          addErrorMessage("Failed to retrieve MetaClass metadatas");
        }
      }
    }, [loadingQuery, dataQuery, errorQuery]);
    const [createMetaclassImport, { data, error }] = client.useMutation(createMetaclassImportMutation);
    React.useEffect(() => {
      if (error) {
        addErrorMessage(error.message);
      }
      if (data && data.createMetaclassImport.__typename === "ErrorPayload") {
        const errorPayload = data.createMetaclassImport;
        addErrorMessage(errorPayload.message);
      }
    }, [data, error, onClose]);
    let modalElement = null;
    if (modal === "dialog") {
      modalElement = /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(Dialog, { open: true, onClose, onClick: (event2) => event2.stopPropagation(), fullWidth: true, children: /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsx(TransferModal, { editingContextId, items: metaclasses, onClose }) }) }) });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        IconButton,
        {
          size: "small",
          color: "inherit",
          "aria-label": "Import Metaclass",
          title: "Import Metaclass",
          onClick: () => setModal("dialog"),
          "data-testid": "import-metaclass",
          children: /* @__PURE__ */ jsxRuntime.jsx("img", { width: "16", height: "16", alt: "", src: httpOrigin + "/api/images/icons-override/full/obj16/Metaclass.svg" })
        }
      ),
      modalElement
    ] }, "import-metaclass-modal-contribution");
  };
  const newDocumentModalMachine = xstate.Machine(
    {
      id: "NewDocumentModal",
      type: "parallel",
      context: {
        name: "",
        nameMessage: "The name cannot be empty",
        nameIsInvalid: false,
        selectedStereotypeDescriptionId: "",
        stereotypeDescriptions: [],
        message: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        newDocumentModal: {
          initial: "loading",
          states: {
            loading: {
              on: {
                HANDLE_FETCHED_STEREOTYPE_DESCRIPTIONS: [
                  {
                    target: "invalid",
                    actions: "updateStereotypeDescriptions"
                  }
                ]
              }
            },
            invalid: {
              on: {
                CHANGE_NAME: [
                  {
                    cond: "isNameInvalid",
                    target: "invalid",
                    actions: "updateName"
                  },
                  {
                    target: "valid",
                    actions: "updateName"
                  }
                ],
                CHANGE_STEREOTYPE_DESCRIPTION: [
                  {
                    actions: "updateStereotypeDescription"
                  }
                ]
              }
            },
            valid: {
              on: {
                CHANGE_NAME: [
                  {
                    cond: "isNameInvalid",
                    target: "invalid",
                    actions: "updateName"
                  },
                  {
                    target: "valid",
                    actions: "updateName"
                  }
                ],
                CHANGE_STEREOTYPE_DESCRIPTION: [
                  {
                    actions: "updateStereotypeDescription"
                  }
                ],
                CREATE_DOCUMENT: [
                  {
                    target: "creatingDocument"
                  }
                ]
              }
            },
            creatingDocument: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    target: "success"
                  },
                  {
                    target: "valid"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isNameInvalid: (_, event2) => {
          const { name } = event2;
          return name.trim().length === 0;
        },
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.createDocument.__typename === "CreateDocumentSuccessPayload";
        }
      },
      actions: {
        updateStereotypeDescriptions: xstate.assign((_, event2) => {
          const { data } = event2;
          const { stereotypeDescriptions: stereotypeDescriptionsConnections } = data.viewer.editingContext;
          const selectedStereotypeDescriptionId = stereotypeDescriptionsConnections.edges.length > 0 ? stereotypeDescriptionsConnections.edges[0].node.id : null;
          const stereotypeDescriptions = stereotypeDescriptionsConnections.edges.map((edge) => edge.node);
          return { stereotypeDescriptions, selectedStereotypeDescriptionId };
        }),
        updateName: xstate.assign((_, event2) => {
          const { name } = event2;
          return { name, nameIsInvalid: name.trim().length === 0 };
        }),
        updateStereotypeDescription: xstate.assign((_, event2) => {
          const { stereotypeDescriptionId } = event2;
          return { selectedStereotypeDescriptionId: stereotypeDescriptionId };
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const createDocumentMutation = client.gql`
  mutation createDocument($input: CreateDocumentInput!) {
    createDocument(input: $input) {
      __typename
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const getStereotypeDescriptionsQuery = client.gql`
  query getStereotypeDescriptions($editingContextId: ID!) {
    viewer {
      editingContext(editingContextId: $editingContextId) {
        stereotypeDescriptions {
          edges {
            node {
              id
              label
            }
          }
        }
      }
    }
  }
`;
  const useNewDocumentModalStyles = styles.makeStyles((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(1)
      }
    }
  }));
  const isErrorPayload$6 = (payload) => payload.__typename === "ErrorPayload";
  const NewDocumentModal = ({ editingContextId, onClose }) => {
    const classes = useNewDocumentModalStyles();
    const [{ value, context }, dispatch] = react.useMachine(
      newDocumentModalMachine
    );
    const { newDocumentModal, toast } = value;
    const { name, nameMessage, nameIsInvalid, selectedStereotypeDescriptionId, stereotypeDescriptions, message } = context;
    const {
      loading: stereotypeDescriptionsLoading,
      data: stereotypeDescriptionsData,
      error: stereotypeDescriptionsError
    } = client.useQuery(
      getStereotypeDescriptionsQuery,
      { variables: { editingContextId } }
    );
    React.useEffect(() => {
      if (!stereotypeDescriptionsLoading) {
        if (stereotypeDescriptionsError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (stereotypeDescriptionsData) {
          const fetchStereotypeDescriptionsEvent = {
            type: "HANDLE_FETCHED_STEREOTYPE_DESCRIPTIONS",
            data: stereotypeDescriptionsData
          };
          dispatch(fetchStereotypeDescriptionsEvent);
        }
      }
    }, [stereotypeDescriptionsLoading, stereotypeDescriptionsData, stereotypeDescriptionsError, dispatch]);
    const onNameChange = (event2) => {
      const value2 = event2.target.value;
      const changeNameEvent = { type: "CHANGE_NAME", name: value2 };
      dispatch(changeNameEvent);
    };
    const onStereotypeDescriptionChange = (event2) => {
      const value2 = event2.target.value;
      const changeStereotypeDescriptionEvent = {
        type: "CHANGE_STEREOTYPE_DESCRIPTION",
        stereotypeDescriptionId: value2
      };
      dispatch(changeStereotypeDescriptionEvent);
    };
    const [createDocument, { loading: createDocumentLoading, data: createDocumentData, error: createDocumentError }] = client.useMutation(createDocumentMutation);
    React.useEffect(() => {
      if (!createDocumentLoading) {
        if (createDocumentError) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (createDocumentData) {
          const handleResponseEvent = { type: "HANDLE_RESPONSE", data: createDocumentData };
          dispatch(handleResponseEvent);
          const { createDocument: createDocument2 } = createDocumentData;
          if (isErrorPayload$6(createDocument2)) {
            const { message: message2 } = createDocument2;
            const showToastEvent = { type: "SHOW_TOAST", message: message2 };
            dispatch(showToastEvent);
          }
        }
      }
    }, [createDocumentLoading, createDocumentData, createDocumentError, dispatch]);
    const onCreateDocument = () => {
      dispatch({ type: "CREATE_DOCUMENT" });
      const input = {
        id: crypto.randomUUID(),
        editingContextId,
        name,
        stereotypeDescriptionId: selectedStereotypeDescriptionId
      };
      createDocument({ variables: { input } });
    };
    React.useEffect(() => {
      if (newDocumentModal === "success") {
        onClose();
      }
    }, [newDocumentModal, onClose]);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { open: true, onClose, "aria-labelledby": "dialog-title", maxWidth: "xs", fullWidth: true, children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Create a new model" }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.form, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            TextField,
            {
              error: nameIsInvalid,
              helperText: nameMessage,
              label: "Name",
              name: "name",
              value: name,
              placeholder: "Enter the name of the model",
              "data-testid": "name",
              inputProps: { "data-testid": "name-input" },
              autoFocus: true,
              onChange: onNameChange,
              disabled: newDocumentModal === "loading" || newDocumentModal === "creatingDocument"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(InputLabel, { id: "newDocumentModalStereotypeDescriptionLabel", children: "Model type" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Select,
            {
              value: selectedStereotypeDescriptionId,
              onChange: onStereotypeDescriptionChange,
              disabled: newDocumentModal === "loading" || newDocumentModal === "creatingDocument",
              labelId: "newDocumentModalStereotypeDescriptionLabel",
              fullWidth: true,
              inputProps: { "data-testid": "stereotype-input" },
              "data-testid": "stereotype",
              children: stereotypeDescriptions.map((stereotypeDescription) => /* @__PURE__ */ jsxRuntime.jsx(MenuItem, { value: stereotypeDescription.id, children: stereotypeDescription.label }, stereotypeDescription.id))
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "contained",
            disabled: newDocumentModal !== "valid",
            "data-testid": "create-document",
            color: "primary",
            onClick: onCreateDocument,
            children: "Create"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      )
    ] });
  };
  const NewDocumentModalContribution = ({ disabled, editingContextId }) => {
    const [modal, setModal] = React.useState(null);
    let modalElement = null;
    if (modal === "NewDocument") {
      modalElement = /* @__PURE__ */ jsxRuntime.jsx(NewDocumentModal, { editingContextId, onClose: () => setModal(null) });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        IconButton,
        {
          disabled,
          size: "small",
          color: "inherit",
          "aria-label": "New model",
          title: "New model",
          onClick: () => setModal("NewDocument"),
          "data-testid": "new-model",
          children: /* @__PURE__ */ jsxRuntime.jsx(icons.Add, {})
        }
      ),
      modalElement
    ] }, "new-document-modal-contribution");
  };
  const useFileUploadViewStyles = styles.makeStyles((theme) => ({
    fileUpload: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
      cursor: "pointer",
      height: 150,
      alignItems: "center",
      justifyItems: "center",
      border: `1px dashed ${theme.palette.secondary.main}`
    },
    inputfile: {
      width: 0.1,
      height: 0.1,
      opacity: "0",
      overflow: "hidden",
      position: "absolute",
      zIndex: -1
    },
    message: {
      fontSize: "16px",
      color: theme.palette.text.primary,
      fontWeight: "bold"
    }
  }));
  const DEFAULT_MESSAGE = "Click here to select a file";
  const initialState = {
    file: null,
    message: DEFAULT_MESSAGE
  };
  const FileUpload = ({ onFileSelected, "data-testid": dataTestId }) => {
    const styles2 = useFileUploadViewStyles();
    const fileInput = React.createRef();
    const [state, setState] = React.useState(initialState);
    const { file, message } = state;
    React.useEffect(() => {
      let message2 = DEFAULT_MESSAGE;
      if (file) {
        message2 = file.name;
      }
      setState((prevState) => {
        return { ...prevState, message: message2 };
      });
    }, [file]);
    const onFileInputChange = () => {
      const { files } = fileInput.current;
      let file2 = null;
      if (files.length === 1) {
        file2 = files[0];
      }
      onFileSelected(file2);
      setState((prevState) => {
        return { ...prevState, file: file2 };
      });
    };
    return /* @__PURE__ */ jsxRuntime.jsxs("label", { className: styles2.fileUpload, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          type: "file",
          name: "file",
          id: "file",
          className: styles2.inputfile,
          ref: fileInput,
          onChange: onFileInputChange,
          "data-testid": dataTestId
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Typography, { className: styles2.message, children: message })
    ] });
  };
  const sendFile = async (httpOrigin, query, variables, file) => {
    const operations = {
      query,
      variables
    };
    const formData = new FormData();
    formData.append("operations", JSON.stringify(operations));
    formData.append("map", JSON.stringify({ "0": "variables.file" }));
    formData.append("0", file);
    const csrfToken = getCookie("XSRF-TOKEN");
    const response = await fetch(`${httpOrigin}/api/graphql/upload`, {
      method: "POST",
      body: formData,
      credentials: "include",
      mode: "cors",
      headers: {
        "X-XSRF-TOKEN": csrfToken
      }
    });
    return await response.json();
  };
  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };
  const uploadDocumentModalMachine = xstate.Machine(
    {
      type: "parallel",
      context: {
        message: void 0,
        file: void 0
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        uploadDocumentModal: {
          initial: "pristine",
          states: {
            pristine: {
              on: {
                SELECT_DOCUMENT: {
                  target: "documentSelected",
                  actions: "updateSelectedFile"
                }
              }
            },
            documentSelected: {
              on: {
                REQUEST_DOCUMENT_UPLOADING: {
                  target: "uploadingDocument"
                },
                SELECT_DOCUMENT: {
                  target: "documentSelected",
                  actions: "updateSelectedFile"
                }
              }
            },
            uploadingDocument: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    target: "success"
                  },
                  {
                    target: "documentSelected"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.uploadDocument.__typename === "UploadDocumentSuccessPayload";
        }
      },
      actions: {
        updateSelectedFile: xstate.assign((_, event2) => {
          const { file } = event2;
          return { file };
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const uploadDocumentMutationFile = client.gql`
  mutation uploadDocument($input: UploadDocumentInput!) {
    uploadDocument(input: $input) {
      __typename
      ... on ErrorPayload {
        message
      }
    }
  }
`.loc.source.body;
  const isErrorPayload$5 = (payload) => payload.__typename === "ErrorPayload";
  const UploadDocumentModal = ({ editingContextId, onDocumentUploaded, onClose }) => {
    const [{ value, context }, dispatch] = react.useMachine(
      uploadDocumentModalMachine
    );
    const { toast, uploadDocumentModal } = value;
    const { file, message } = context;
    const { httpOrigin } = React.useContext(siriusComponentsCore.ServerContext);
    const useFormStyles = styles.makeStyles((theme) => ({
      form: {
        display: "flex",
        flexDirection: "column",
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        "& > *": {
          marginBottom: theme.spacing(2)
        }
      }
    }));
    const styles$1 = useFormStyles();
    const uploadDocument = async () => {
      const requestDocumentUploadingEvent = { type: "REQUEST_DOCUMENT_UPLOADING" };
      dispatch(requestDocumentUploadingEvent);
      event.preventDefault();
      const variables = {
        input: {
          id: crypto.randomUUID(),
          editingContextId,
          file: null
          // the file will be send as a part of the multipart POST query.
        }
      };
      try {
        const { data, error } = await sendFile(httpOrigin, uploadDocumentMutationFile, variables, file);
        if (error) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: error.message
          };
          dispatch(showToastEvent);
        }
        if (data) {
          const event2 = { type: "HANDLE_RESPONSE", data };
          dispatch(event2);
          const { uploadDocument: uploadDocument2 } = data;
          if (isErrorPayload$5(uploadDocument2)) {
            const { message: message2 } = uploadDocument2;
            const showToastEvent = { type: "SHOW_TOAST", message: message2 };
            dispatch(showToastEvent);
          }
        }
      } catch (exception) {
        const showToastEvent = { type: "SHOW_TOAST", message: exception.toString() };
        dispatch(showToastEvent);
      }
    };
    const onFileSelected = (file2) => {
      const selectDocumentEvent = { type: "SELECT_DOCUMENT", file: file2 };
      dispatch(selectDocumentEvent);
    };
    React.useEffect(() => {
      if (uploadDocumentModal === "success") {
        onDocumentUploaded();
      }
    }, [uploadDocumentModal, onDocumentUploaded]);
    const canSubmit = uploadDocumentModal === "documentSelected";
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { open: true, onClose, "aria-labelledby": "dialog-title", fullWidth: true, children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Upload new model" }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsx("form", { id: "upload-form-id", onSubmit: uploadDocument, encType: "multipart/form-data", className: styles$1.form, children: /* @__PURE__ */ jsxRuntime.jsx(FormGroup, { children: /* @__PURE__ */ jsxRuntime.jsx(FileUpload, { onFileSelected, "data-testid": "file" }) }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "contained",
            disabled: !canSubmit,
            color: "primary",
            type: "submit",
            form: "upload-form-id",
            "data-testid": "upload-document-submit",
            children: "Upload"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      )
    ] });
  };
  const UploadDocumentModalContribution = ({
    disabled,
    editingContextId
  }) => {
    const [modal, setModal] = React.useState(null);
    const onFinished = () => {
      setModal(null);
    };
    let modalElement = null;
    if (modal === "UploadDocument") {
      modalElement = /* @__PURE__ */ jsxRuntime.jsx(UploadDocumentModal, { editingContextId, onDocumentUploaded: onFinished, onClose: onFinished });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        IconButton,
        {
          disabled,
          size: "small",
          color: "inherit",
          "aria-label": "Upload model",
          title: "Upload model",
          onClick: () => setModal("UploadDocument"),
          "data-testid": "upload-document-icon",
          children: /* @__PURE__ */ jsxRuntime.jsx(icons.Publish, {})
        }
      ),
      modalElement
    ] }, "upload-document-modal-contribution");
  };
  const getProjectQuery = client.gql`
  query getRepresentation($projectId: ID!, $representationId: ID!, $includeRepresentation: Boolean!) {
    viewer {
      project(projectId: $projectId) {
        id
        name
        currentEditingContext {
          id
          representation(representationId: $representationId) @include(if: $includeRepresentation) {
            id
            label
            kind
            isProfileDiagram
          }
        }
      }
    }
  }
`;
  const useEditProjectViewStyles = styles.makeStyles((_) => ({
    editProjectView: {
      display: "grid",
      gridTemplateRows: "min-content minmax(0, 1fr)",
      gridTemplateColumns: "1fr",
      height: "100vh",
      width: "100vw"
    }
  }));
  const EditProjectView = () => {
    const history = reactRouterDom.useHistory();
    const routeMatch = reactRouterDom.useRouteMatch();
    const { projectId, representationId } = reactRouterDom.useParams();
    const classes = useEditProjectViewStyles();
    const [{ value, context }, dispatch] = react.useMachine(
      editProjectViewMachine
    );
    const { toast, editProjectView } = value;
    const { project, representation, message } = context;
    const [isProfileDiagram, setIsProfileDIagram] = React.useState(false);
    const { loading, data, error } = client.useQuery(getProjectQuery, {
      variables: {
        projectId,
        representationId: representationId ?? "",
        includeRepresentation: !!representationId
      }
    });
    React.useEffect(() => {
      var _a, _b, _c, _d;
      if (!loading) {
        if (error) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (data) {
          const fetchProjectEvent = { type: "HANDLE_FETCHED_PROJECT", data };
          dispatch(fetchProjectEvent);
          setIsProfileDIagram((_d = (_c = (_b = (_a = data == null ? void 0 : data.viewer) == null ? void 0 : _a.project) == null ? void 0 : _b.currentEditingContext) == null ? void 0 : _c.representation) == null ? void 0 : _d.isProfileDiagram);
        }
      }
    }, [loading, data, error, dispatch]);
    React.useEffect(() => {
      if (representation && representation.id !== representationId) {
        const pathname = reactRouterDom.generatePath(routeMatch.path, { projectId, representationId: representation.id });
        history.push({ pathname });
      } else if (editProjectView === "loaded" && representation === null && representationId) {
        const pathname = reactRouterDom.generatePath(routeMatch.path, { projectId, representationId: null });
        history.push({ pathname });
      }
    }, [editProjectView, projectId, routeMatch, history, representation, representationId]);
    let initialSelection = null;
    if (representation) {
      initialSelection = {
        entries: [
          {
            id: representation == null ? void 0 : representation.id,
            label: representation == null ? void 0 : representation.label,
            kind: representation == null ? void 0 : representation.kind
          }
        ]
      };
    }
    let main = null;
    if (editProjectView === "loaded" && project) {
      const onRepresentationSelected = (representationSelected) => {
        const selectRepresentationEvent = {
          type: "SELECT_REPRESENTATION",
          representation: representationSelected
        };
        dispatch(selectRepresentationEvent);
      };
      const treeItemContextMenuContributions = [
        /* @__PURE__ */ jsxRuntime.jsx(
          siriusComponentsTrees.TreeItemContextMenuContribution,
          {
            canHandle: (treeId, item) => treeId.startsWith("explorer://") && item.kind.startsWith("siriusWeb://document"),
            component: DocumentTreeItemContextMenuContribution
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          siriusComponentsTrees.TreeItemContextMenuContribution,
          {
            canHandle: (treeId, item) => treeId.startsWith("explorer://") && item.kind.startsWith("siriusComponents://semantic"),
            component: ObjectTreeItemContextMenuContribution
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          siriusComponentsTrees.TreeItemContextMenuContribution,
          {
            canHandle: (treeId, item) => treeId.startsWith("explorer://") && item.kind === "siriusComponents://representation?type=Diagram",
            component: DiagramTreeItemContextMenuContribution
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          siriusComponentsTrees.TreeItemContextMenuContribution,
          {
            canHandle: (treeId, item) => {
              return treeId.startsWith("explorer://") && (item.kind === "siriusComponents://semantic?domain=uml&entity=Model" || item.kind === "siriusComponents://semantic?domain=uml&entity=Package" || item.kind === "siriusComponents://semantic?domain=uml&entity=Profile");
            },
            component: UMLModelTreeItemContextMenuContribution
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          siriusComponentsTrees.TreeItemContextMenuContribution,
          {
            canHandle: (treeId, item) => {
              return treeId.startsWith("explorer://") && item.kind.includes("siriusComponents://semantic?domain=uml");
            },
            component: UMLElementTreeItemContextMenuContribution
          }
        )
      ];
      const treeToolBarContributions = [
        /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsTrees.TreeToolBarContribution, { component: NewDocumentModalContribution }),
        /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsTrees.TreeToolBarContribution, { component: UploadDocumentModalContribution })
      ];
      const diagramPaletteToolContributions = [
        /* @__PURE__ */ jsxRuntime.jsx(
          siriusComponentsDiagrams.DiagramPaletteToolContribution,
          {
            canHandle: (_diagramId, diagramElementId) => {
              if (!isProfileDiagram) {
                return false;
              }
              if (_diagramId === diagramElementId) {
                return true;
              } else {
                const nodes = reactflow.useNodes();
                const targetedNode = nodes.find((node) => node.id === diagramElementId);
                return (targetedNode == null ? void 0 : targetedNode.data.targetObjectKind) === "siriusComponents://semantic?domain=uml&entity=Profile";
              }
            },
            component: PapyrusPopupToolContribution
          }
        )
      ];
      main = /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsTrees.TreeItemContextMenuContext.Provider, { value: treeItemContextMenuContributions, children: /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsTrees.TreeToolBarContext.Provider, { value: treeToolBarContributions, children: /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsDiagrams.DiagramPaletteToolContext.Provider, { value: diagramPaletteToolContributions, children: /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Workbench,
        {
          editingContextId: project.currentEditingContext.id,
          initialRepresentationSelected: representation,
          onRepresentationSelected,
          readOnly: false
        }
      ) }) }) });
    } else if (editProjectView === "missing") {
      main = /* @__PURE__ */ jsxRuntime.jsx(Grid, { container: true, justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h4", align: "center", gutterBottom: true, children: "The project does not exist" }) });
    }
    let navbar = null;
    if (editProjectView === "missing" || editProjectView === "loading") {
      navbar = /* @__PURE__ */ jsxRuntime.jsx(NavigationBar, {});
    } else if (editProjectView === "loaded") {
      navbar = /* @__PURE__ */ jsxRuntime.jsx(EditProjectNavbar, { project });
    }
    if (editProjectView !== "loaded") {
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.editProjectView, children: [
        navbar,
        main
      ] });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(siriusComponentsCore.SelectionContextProvider, { initialSelection, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.editProjectView, children: [
        navbar,
        main
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      )
    ] });
  };
  const useFooterStyles = styles.makeStyles((theme) => ({
    footer: {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(2),
      "& > *": {
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5)
      }
    }
  }));
  const Footer = () => {
    const classes = useFooterStyles();
    return /* @__PURE__ */ jsxRuntime.jsxs("footer", { className: classes.footer, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Typography, { variant: "caption", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Obeo. Powered by "
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Link,
        {
          variant: "caption",
          href: "https://gitlab.eclipse.org/eclipse/papyrus/org.eclipse.papyrus-web",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Papyrus Web"
        }
      )
    ] });
  };
  const isChangeNameEvent = (event2) => !!event2.name;
  const isNameInvalid$1 = (name) => name.trim().length < 3 || name.trim().length > 1024;
  const isCreateProjectSuccessPayload = (payload) => payload.__typename === "CreateProjectSuccessPayload";
  const newProjectViewMachine = xstate.Machine(
    {
      id: "NewProjectView",
      type: "parallel",
      context: {
        name: "",
        nameMessage: "The name must contain between 3 and 1024 characters",
        nameIsInvalid: false,
        message: null,
        newProjectId: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        newProjectView: {
          initial: "pristine",
          states: {
            pristine: {
              on: {
                CHANGE_NAME: [
                  {
                    cond: "isFormInvalid",
                    target: "invalid",
                    actions: "updateName"
                  },
                  {
                    target: "valid",
                    actions: "updateName"
                  }
                ]
              }
            },
            invalid: {
              on: {
                CHANGE_NAME: [
                  {
                    cond: "isFormInvalid",
                    target: "invalid",
                    actions: "updateName"
                  },
                  {
                    target: "valid",
                    actions: "updateName"
                  }
                ]
              }
            },
            valid: {
              on: {
                CHANGE_NAME: [
                  {
                    cond: "isFormInvalid",
                    target: "invalid",
                    actions: "updateName"
                  },
                  {
                    target: "valid",
                    actions: "updateName"
                  }
                ],
                REQUEST_PROJECT_CREATION: [
                  {
                    target: "creatingProject"
                  }
                ]
              }
            },
            creatingProject: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    target: "success",
                    actions: "updateProjectId"
                  },
                  {
                    target: "valid"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isFormInvalid: (_, event2) => {
          if (isChangeNameEvent(event2)) {
            const { name } = event2;
            return isNameInvalid$1(name);
          }
          return true;
        },
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.createProject.__typename === "CreateProjectSuccessPayload";
        }
      },
      actions: {
        updateName: xstate.assign((_, event2) => {
          const { name } = event2;
          return { name, nameIsInvalid: isNameInvalid$1(name) };
        }),
        updateProjectId: xstate.assign((_, event2) => {
          const { data } = event2;
          const { createProject } = data;
          if (isCreateProjectSuccessPayload(createProject)) {
            return { newProjectId: createProject.project.id };
          }
          return {};
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const createProjectMutation = client.gql`
  mutation createProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      __typename
      ... on CreateProjectSuccessPayload {
        project {
          id
        }
      }
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const useNewProjectViewStyles = styles.makeStyles((theme) => ({
    newProjectViewContainer: {
      display: "flex",
      flexDirection: "column",
      paddingTop: theme.spacing(8)
    },
    newProjectView: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "min-content 1fr min-content",
      minHeight: "100vh"
    },
    main: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      paddingBottom: theme.spacing(2)
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "start"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      "& > *": {
        marginBottom: theme.spacing(2)
      }
    }
  }));
  const isErrorPayload$4 = (payload) => payload.__typename === "ErrorPayload";
  const NewProjectView = () => {
    const classes = useNewProjectViewStyles();
    const [{ value, context }, dispatch] = react.useMachine(newProjectViewMachine);
    const { newProjectView, toast } = value;
    const { name, nameMessage, nameIsInvalid, message, newProjectId } = context;
    const [createProject, { loading, data, error }] = client.useMutation(createProjectMutation);
    const onNameChange = (event2) => {
      const value2 = event2.target.value;
      const changeNameEvent = { type: "CHANGE_NAME", name: value2 };
      dispatch(changeNameEvent);
    };
    const onCreateNewProject = (event2) => {
      event2.preventDefault();
      const variables = {
        input: {
          id: crypto.randomUUID(),
          name: name.trim(),
          natures: []
        }
      };
      const submitEvent = { type: "REQUEST_PROJECT_CREATION" };
      dispatch(submitEvent);
      createProject({ variables });
    };
    React.useEffect(() => {
      if (!loading) {
        if (error) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (data) {
          const handleResponseEvent = { type: "HANDLE_RESPONSE", data };
          dispatch(handleResponseEvent);
          const { createProject: createProject2 } = data;
          if (isErrorPayload$4(createProject2)) {
            const { message: message2 } = createProject2;
            const showToastEvent = { type: "SHOW_TOAST", message: message2 };
            dispatch(showToastEvent);
          }
        }
      }
    }, [loading, data, error, dispatch]);
    if (newProjectView === "success") {
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: `/projects/${newProjectId}/edit`, push: true });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.newProjectView, children: [
        /* @__PURE__ */ jsxRuntime.jsx(NavigationBar, {}),
        /* @__PURE__ */ jsxRuntime.jsx("main", { className: classes.main, children: /* @__PURE__ */ jsxRuntime.jsx(Container, { maxWidth: "sm", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.newProjectViewContainer, children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.titleContainer, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h2", align: "center", gutterBottom: true, children: "Create a new project" }),
            /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h4", align: "center", gutterBottom: true, children: "Get started by creating a new project" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Paper, { children: /* @__PURE__ */ jsxRuntime.jsxs("form", { onSubmit: onCreateNewProject, className: classes.form, children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              TextField,
              {
                error: nameIsInvalid,
                helperText: nameMessage,
                label: "Name",
                name: "name",
                value: name,
                placeholder: "Enter the project name",
                inputProps: { "data-testid": "name" },
                autoFocus: true,
                onChange: onNameChange
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.buttons, children: /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "contained",
                type: "submit",
                disabled: newProjectView !== "valid",
                "data-testid": "create-project",
                color: "primary",
                children: "Create"
              }
            ) })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(Footer, {})
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      )
    ] });
  };
  const useProjectTemplateStyles = styles.makeStyles((theme) => ({
    projectTemplateCard: {
      width: theme.spacing(30),
      height: theme.spacing(18),
      display: "grid",
      gridTemplateRows: "1fr min-content"
    },
    templateCardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    },
    templateCardActions: {
      minWidth: 0
    },
    projectTemplateLabel: {
      textTransform: "none",
      fontWeight: 400,
      fontSize: theme.spacing(2),
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap"
    }
  }));
  const ProjectTemplateCard = ({ template, running, disabled, onCreateProject }) => {
    const classes = useProjectTemplateStyles();
    const { httpOrigin } = React.useContext(siriusComponentsCore.ServerContext);
    return /* @__PURE__ */ jsxRuntime.jsx(Button, { disabled, onClick: onCreateProject, "data-testid": `create-template-${template.label}`, children: /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: classes.projectTemplateCard, children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: classes.templateCardContent, children: running ? /* @__PURE__ */ jsxRuntime.jsx(CircularProgress, {}) : /* @__PURE__ */ jsxRuntime.jsx("img", { height: "80px", alt: `New ${template.label}`, src: httpOrigin + template.imageURL }) }),
      /* @__PURE__ */ jsxRuntime.jsx(CardActions, { className: classes.templateCardActions, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip, { title: template.label, children: /* @__PURE__ */ jsxRuntime.jsxs(Typography, { variant: "h5", className: classes.projectTemplateLabel, children: [
        "+ ",
        template.label
      ] }) }) })
    ] }) });
  };
  const useProjectCardStyles = styles.makeStyles((theme) => ({
    projectCard: {
      width: theme.spacing(30),
      height: theme.spacing(18),
      display: "grid",
      gridTemplateRows: "1fr min-content"
    },
    projectCardActions: {
      minWidth: 0
    },
    projectCardLabel: {
      textTransform: "none",
      fontWeight: 400,
      fontSize: theme.spacing(2),
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap"
    },
    projectCardIcon: {
      fontSize: theme.spacing(8)
    },
    blankProjectCard: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    uploadProjectCard: {
      backgroundColor: theme.palette.divider,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    showAllTemplatesCardContent: {
      backgroundColor: theme.palette.divider,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }));
  const NewProjectCard = () => {
    const classes = useProjectCardStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(Button, { to: `/new/project`, component: reactRouterDom.Link, "data-testid": "create", children: /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: classes.projectCard, children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: classes.blankProjectCard, children: /* @__PURE__ */ jsxRuntime.jsx(AddIcon, { className: classes.projectCardIcon, htmlColor: "white" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(CardActions, { className: classes.projectCardActions, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip, { title: "Blank project", children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h5", className: classes.projectCardLabel, children: "+ Blank project" }) }) })
    ] }) });
  };
  const UploadProjectCard = () => {
    const classes = useProjectCardStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(Button, { to: `/upload/project`, component: reactRouterDom.Link, "data-testid": "upload", children: /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: classes.projectCard, children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: classes.uploadProjectCard, children: /* @__PURE__ */ jsxRuntime.jsx(CloudUploadOutlinedIcon, { className: classes.projectCardIcon, htmlColor: "white" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(CardActions, { className: classes.projectCardActions, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip, { title: "Upload project", children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h5", className: classes.projectCardLabel, children: "+ Upload project" }) }) })
    ] }) });
  };
  const ShowAllTemplatesCard = ({ onClick }) => {
    const classes = useProjectCardStyles();
    return /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick, "data-testid": "show-all-templates", children: /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: classes.projectCard, children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: classes.showAllTemplatesCardContent, children: /* @__PURE__ */ jsxRuntime.jsx(MoreHorizIcon, { className: classes.projectCardIcon, htmlColor: "white" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(CardActions, { className: classes.projectCardActions, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip, { title: "Show all templates", children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h5", className: classes.projectCardLabel, children: "Show all templates" }) }) })
    ] }) });
  };
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  var docCache = /* @__PURE__ */ new Map();
  var fragmentSourceMap = /* @__PURE__ */ new Map();
  var printFragmentWarnings = true;
  var experimentalFragmentVariables = false;
  function normalize(string) {
    return string.replace(/[\s,]+/g, " ").trim();
  }
  function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
  }
  function processFragments(ast) {
    var seenKeys = /* @__PURE__ */ new Set();
    var definitions = [];
    ast.definitions.forEach(function(fragmentDefinition) {
      if (fragmentDefinition.kind === "FragmentDefinition") {
        var fragmentName = fragmentDefinition.name.value;
        var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
        var sourceKeySet = fragmentSourceMap.get(fragmentName);
        if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
          if (printFragmentWarnings) {
            console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
          }
        } else if (!sourceKeySet) {
          fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
        }
        sourceKeySet.add(sourceKey);
        if (!seenKeys.has(sourceKey)) {
          seenKeys.add(sourceKey);
          definitions.push(fragmentDefinition);
        }
      } else {
        definitions.push(fragmentDefinition);
      }
    });
    return __assign(__assign({}, ast), { definitions });
  }
  function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function(node) {
      if (node.loc)
        delete node.loc;
      Object.keys(node).forEach(function(key) {
        var value = node[key];
        if (value && typeof value === "object") {
          workSet.add(value);
        }
      });
    });
    var loc = doc.loc;
    if (loc) {
      delete loc.startToken;
      delete loc.endToken;
    }
    return doc;
  }
  function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
      var parsed = graphql.parse(source, {
        experimentalFragmentVariables,
        allowLegacyFragmentVariables: experimentalFragmentVariables
      });
      if (!parsed || parsed.kind !== "Document") {
        throw new Error("Not a valid GraphQL document.");
      }
      docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
  }
  function gql(literals) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (typeof literals === "string") {
      literals = [literals];
    }
    var result = literals[0];
    args.forEach(function(arg, i) {
      if (arg && arg.kind === "Document") {
        result += arg.loc.source.body;
      } else {
        result += arg;
      }
      result += literals[i + 1];
    });
    return parseDocument(result);
  }
  function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
  }
  function disableFragmentWarnings() {
    printFragmentWarnings = false;
  }
  function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
  }
  function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
  }
  var extras = {
    gql,
    resetCaches,
    disableFragmentWarnings,
    enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables
  };
  (function(gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
  })(gql || (gql = {}));
  gql["default"] = gql;
  const gql$1 = gql;
  const redirectUrlFromTemplate = (projectCreatedFromTemplate) => {
    const { project, representationToOpen } = projectCreatedFromTemplate;
    if (representationToOpen) {
      return `/projects/${project.id}/edit/${representationToOpen.id}`;
    }
    return `/projects/${project.id}/edit`;
  };
  const createProjectFromTemplateMutation = client.gql`
  mutation createProjectFromTemplate($input: CreateProjectFromTemplateInput!) {
    createProjectFromTemplate(input: $input) {
      __typename
      ... on CreateProjectFromTemplateSuccessPayload {
        project {
          id
        }
        representationToOpen {
          id
        }
      }
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const isErrorPayload$3 = (payload) => payload.__typename === "ErrorPayload";
  const isCreateProjectFromTemplateSuccessPayload = (payload) => payload.__typename === "CreateProjectFromTemplateSuccessPayload";
  const useCreateProjectFromTemplate = () => {
    const [performProjectCreationFromTemplate, { loading, data, error }] = client.useMutation(createProjectFromTemplateMutation);
    const { addErrorMessage, addMessages } = siriusComponentsCore.useMultiToast();
    React.useEffect(() => {
      if (error) {
        addErrorMessage("An unexpected error has occurred, please refresh the page");
      }
      if (data) {
        const { createProjectFromTemplate: createProjectFromTemplate2 } = data;
        if (isErrorPayload$3(createProjectFromTemplate2)) {
          addMessages(createProjectFromTemplate2.messages);
        }
      }
    }, [data, error]);
    const createProjectFromTemplate = (templateId) => {
      const variables = {
        input: {
          id: crypto.randomUUID(),
          templateId
        }
      };
      performProjectCreationFromTemplate({ variables });
    };
    let projectCreatedFromTemplate = null;
    if (data && isCreateProjectFromTemplateSuccessPayload(data.createProjectFromTemplate)) {
      projectCreatedFromTemplate = data.createProjectFromTemplate;
    }
    return {
      createProjectFromTemplate,
      loading,
      projectCreatedFromTemplate
    };
  };
  const getProjectTemplatesQuery = client.gql`
  query getProjectTemplates($page: Int!, $limit: Int!) {
    viewer {
      projectTemplates(page: $page, limit: $limit) {
        edges {
          node {
            id
            label
            imageURL
          }
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          count
        }
      }
    }
  }
`;
  const useProjectTemplates = (page, limit, skip) => {
    const variables = {
      page,
      limit
    };
    const { data, loading, error } = client.useQuery(
      getProjectTemplatesQuery,
      { variables, skip }
    );
    const { addErrorMessage } = siriusComponentsCore.useMultiToast();
    React.useEffect(() => {
      if (error) {
        addErrorMessage(error.message);
      }
    }, [error]);
    return {
      data,
      loading
    };
  };
  gql$1`
  query getProjectTemplates($page: Int!) {
    viewer {
      projectTemplates(page: $page, limit: 12) {
        edges {
          node {
            id
            label
            imageURL
          }
        }
        pageInfo {
          count
        }
      }
    }
  }
`;
  const useProjectTemplatesModalStyles = styles.makeStyles((theme) => ({
    content: {
      display: "grid",
      gridTemplateRows: "1fr min-content",
      gap: theme.spacing(2)
    },
    templateCards: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr 1fr"
    },
    navigation: {
      justifySelf: "center"
    }
  }));
  const ProjectTemplatesModal = ({ onClose }) => {
    const styles2 = useProjectTemplatesModalStyles();
    const [state, setState] = React.useState({
      page: 0,
      limit: 12,
      runningTemplate: null,
      projectTemplates: null,
      count: null
    });
    const lastPage = state.count ? Math.ceil((state.count + 2) / 12) : 0;
    const lastPageWithTemplates = state.count ? Math.ceil(state.count / 12) : 0;
    const skip = state.projectTemplates !== null && state.page > lastPageWithTemplates;
    const { data, loading } = useProjectTemplates(state.page, state.limit, skip);
    React.useEffect(() => {
      if (data) {
        const projectTemplates = data.viewer.projectTemplates.edges.map((edge) => edge.node) ?? [];
        const count = data.viewer.projectTemplates.pageInfo.count;
        setState((prevState) => ({ ...prevState, projectTemplates, count }));
      }
    }, [data]);
    const {
      createProjectFromTemplate,
      loading: createProjectLoading,
      projectCreatedFromTemplate
    } = useCreateProjectFromTemplate();
    const redirectUrl = projectCreatedFromTemplate ? redirectUrlFromTemplate(projectCreatedFromTemplate) : null;
    if (redirectUrl) {
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: redirectUrl });
    }
    const cards = [];
    if (state.projectTemplates && state.page <= lastPageWithTemplates) {
      state.projectTemplates.map((template) => /* @__PURE__ */ jsxRuntime.jsx(
        ProjectTemplateCard,
        {
          template,
          disabled: createProjectLoading,
          running: template === state.runningTemplate,
          onCreateProject: () => createProjectFromTemplate(template.id)
        },
        template.id
      )).forEach((card) => cards.push(card));
      if (cards.length < 12) {
        cards.push(/* @__PURE__ */ jsxRuntime.jsx(NewProjectCard, {}, "new-project"));
      }
      if (cards.length < 12) {
        cards.push(/* @__PURE__ */ jsxRuntime.jsx(UploadProjectCard, {}, "upload-project"));
      }
    } else if (state.count % 12 === 11) {
      cards.push(/* @__PURE__ */ jsxRuntime.jsx(UploadProjectCard, {}, "upload-project"));
    } else if (state.count % 12 === 0) {
      cards.push(/* @__PURE__ */ jsxRuntime.jsx(NewProjectCard, {}, "new-project"));
      cards.push(/* @__PURE__ */ jsxRuntime.jsx(UploadProjectCard, {}, "upload-project"));
    }
    let content;
    if (loading) {
      content = /* @__PURE__ */ jsxRuntime.jsx(Typography, { children: "Loading..." });
    } else {
      content = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles2.templateCards, "data-testid": "project-templates-cards", children: cards }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Pagination,
          {
            className: styles2.navigation,
            page: state.page + 1,
            count: lastPage,
            onChange: (_, value) => {
              const page = value;
              setState((prevState) => ({ ...prevState, page }));
            }
          }
        )
      ] });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Dialog,
      {
        open: true,
        onClose: () => {
          if (!loading) {
            onClose();
          }
        },
        "aria-labelledby": "dialog-title",
        "data-testid": "project-templates-modal",
        maxWidth: "md",
        fullWidth: true,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Select a project template" }),
          /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { className: styles2.content, children: content })
        ]
      }
    );
  };
  const useCreateProjectAreaStyles = styles.makeStyles((theme) => ({
    createProjectArea: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(5)
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    content: {
      display: "grid",
      gap: theme.spacing(1),
      gridTemplateColumns: "repeat(6, 1fr)"
    }
  }));
  const CreateProjectArea = ({}) => {
    const classes = useCreateProjectAreaStyles();
    const [state, setState] = React.useState({
      page: 0,
      limit: 3,
      runningTemplate: null,
      modalDisplayed: null
    });
    const { data } = useProjectTemplates(state.page, state.limit);
    const projectTemplates = (data == null ? void 0 : data.viewer.projectTemplates.edges.map((edge) => edge.node)) ?? [];
    const { createProjectFromTemplate, loading, projectCreatedFromTemplate } = useCreateProjectFromTemplate();
    const onCreateProject = (template) => {
      if (!state.runningTemplate) {
        createProjectFromTemplate(template.id);
        setState((prevState) => ({ ...prevState, runningTemplate: template }));
      }
    };
    const showAllTemplatesModal = () => setState((prevState) => ({ ...prevState, modalDisplayed: "SHOW_ALL_TEMPLATES" }));
    const closeModal = () => setState((prevState) => ({ ...prevState, modalDisplayed: null }));
    const redirectUrl = projectCreatedFromTemplate ? redirectUrlFromTemplate(projectCreatedFromTemplate) : null;
    if (redirectUrl) {
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: redirectUrl });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.createProjectArea, children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.header, children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h4", children: "Create a new project" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.content, children: [
          projectTemplates.map((template) => {
            var _a;
            return /* @__PURE__ */ jsxRuntime.jsx(
              ProjectTemplateCard,
              {
                template,
                disabled: loading,
                running: template.id === ((_a = state.runningTemplate) == null ? void 0 : _a.id),
                onCreateProject: () => onCreateProject(template)
              },
              template.id
            );
          }),
          /* @__PURE__ */ jsxRuntime.jsx(NewProjectCard, {}),
          /* @__PURE__ */ jsxRuntime.jsx(UploadProjectCard, {}),
          /* @__PURE__ */ jsxRuntime.jsx(ShowAllTemplatesCard, { onClick: showAllTemplatesModal })
        ] })
      ] }),
      state.modalDisplayed === "SHOW_ALL_TEMPLATES" ? /* @__PURE__ */ jsxRuntime.jsx(ProjectTemplatesModal, { onClose: closeModal }) : null
    ] });
  };
  const projectActionButtonMenuItemExtensionPoint = {
    identifier: "projectActionButton#menuItem",
    fallback: []
  };
  const ProjectActionButton = ({ project, onChange }) => {
    const [state, setState] = React.useState({
      contextMenuAnchorElement: null
    });
    const onClick = (event2) => setState((prevState) => ({ ...prevState, contextMenuAnchorElement: event2.currentTarget }));
    const onCloseContextMenu = () => setState((prevState) => ({ ...prevState, contextMenuAnchorElement: null }));
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Tooltip, { title: "More", children: /* @__PURE__ */ jsxRuntime.jsx(IconButton, { "aria-label": "more", onClick, size: "small", "data-testid": "more", children: /* @__PURE__ */ jsxRuntime.jsx(MoreHorizIcon, { fontSize: "small" }) }) }),
      state.contextMenuAnchorElement ? /* @__PURE__ */ jsxRuntime.jsx(
        ProjectContextMenu,
        {
          menuAnchor: state.contextMenuAnchorElement,
          project,
          onChange,
          onClose: onCloseContextMenu
        }
      ) : null
    ] });
  };
  const modals = {
    RENAME_PROJECT_DIALOG: RenameProjectModal,
    DELETE_PROJECT_DIALOG: DeleteProjectModal
  };
  const ProjectContextMenu = ({ menuAnchor, project, onChange, onClose }) => {
    const [state, setState] = React.useState({
      modalToDisplay: null
    });
    const onRename = () => setState((prevState) => ({ ...prevState, modalToDisplay: "RENAME_PROJECT_DIALOG" }));
    const onDelete = () => setState((prevState) => ({ ...prevState, modalToDisplay: "DELETE_PROJECT_DIALOG" }));
    const onCancel = () => setState((prevState) => ({ ...prevState, modalToDisplay: null }));
    const onSuccess = () => {
      setState((prevState) => ({ ...prevState, modalToDisplay: null }));
      onChange();
    };
    const ModalComponent = modals[state.modalToDisplay];
    const { httpOrigin } = React.useContext(siriusComponentsCore.ServerContext);
    const { data: menuItemProps } = siriusComponentsCore.useData(projectActionButtonMenuItemExtensionPoint);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        Menu,
        {
          "data-testid": "project-actions-contextmenu",
          id: "project-actions-contextmenu",
          anchorEl: menuAnchor,
          keepMounted: true,
          open: true,
          onClose,
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs(MenuItem, { onClick: onRename, "data-testid": "rename", children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(EditIcon, {}) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Rename" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs(MenuItem, { component: "a", href: `${httpOrigin}/api/projects/${project.id}`, type: "application/octet-stream", children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(GetAppIcon, {}) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Download" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs(MenuItem, { onClick: onDelete, "data-testid": "delete", children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntime.jsx(DeleteIcon, {}) }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText, { primary: "Delete" })
            ] }),
            menuItemProps.map((props, index) => /* @__PURE__ */ React.createElement(MenuItem, { ...props, key: index }))
          ]
        }
      ),
      ModalComponent ? /* @__PURE__ */ jsxRuntime.jsx(ModalComponent, { project, onSuccess, onCancel }) : null
    ] });
  };
  const useProjectsRowStyles = styles.makeStyles(() => ({
    projectLabel: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "100ch"
    }
  }));
  const ProjectRow = ({ project, onChange }) => {
    const classes = useProjectsRowStyles();
    return /* @__PURE__ */ jsxRuntime.jsxs(TableRow, { hover: true, children: [
      /* @__PURE__ */ jsxRuntime.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntime.jsx(
        Link,
        {
          component: reactRouterDom.Link,
          to: `/projects/${project.id}/edit`,
          color: "inherit",
          className: classes.projectLabel,
          children: project.name
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxRuntime.jsx(ProjectActionButton, { project, onChange }) })
    ] }, project.id);
  };
  const projectsTableRowExtensionPoint = {
    identifier: "projectsTable#row",
    FallbackComponent: ProjectRow
  };
  const ProjectsTable = ({ projects, page, limit, count, onChange, onPageChange }) => {
    const { Component: ProjectRow2 } = siriusComponentsCore.useComponent(projectsTableRowExtensionPoint);
    return /* @__PURE__ */ jsxRuntime.jsxs(Paper, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntime.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs("colgroup", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("col", { width: "60%" }),
          /* @__PURE__ */ jsxRuntime.jsx("col", { width: "40%" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntime.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(TableCell, { variant: "head", children: "Name" }),
          /* @__PURE__ */ jsxRuntime.jsx(TableCell, { variant: "head" })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(TableBody, { "data-testid": "projects", children: projects.map((project) => /* @__PURE__ */ jsxRuntime.jsx(ProjectRow2, { project, onChange }, project.id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        TablePagination,
        {
          component: "div",
          rowsPerPageOptions: [],
          rowsPerPage: limit,
          page,
          onPageChange: (_event, page2) => onPageChange(page2),
          count
        }
      )
    ] });
  };
  const getProjectsQuery = client.gql`
  query getProjects($page: Int!, $limit: Int!) {
    viewer {
      ...ViewerProjects
    }
  }
`;
  const useProjects = (page, limit) => {
    const variables = {
      page,
      limit
    };
    const { data, loading, error, refetch } = client.useQuery(
      getProjectsQuery,
      {
        variables
      }
    );
    const { addErrorMessage } = siriusComponentsCore.useMultiToast();
    React.useEffect(() => {
      if (error) {
        addErrorMessage(error.message);
      }
    }, [error]);
    const refreshProjects = () => refetch(variables);
    return { data, loading, refreshProjects };
  };
  const useListProjectsAreaStyles = styles.makeStyles((theme) => ({
    listProjectsArea: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(5)
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }));
  const ListProjectsArea = ({}) => {
    const [state, setState] = React.useState({
      page: 0,
      limit: 20
    });
    const onPageChange = (page) => setState((prevState) => ({ ...prevState, page }));
    const { data, refreshProjects } = useProjects(state.page, state.limit);
    const projects = (data == null ? void 0 : data.viewer.projects.edges.map((edge) => edge.node)) ?? [];
    const count = (data == null ? void 0 : data.viewer.projects.pageInfo.count) ?? 0;
    const classes = useListProjectsAreaStyles();
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.listProjectsArea, children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.header, children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h4", children: "Existing Projects" }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { children: projects.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(NoProjectsFound, {}) : /* @__PURE__ */ jsxRuntime.jsx(
        ProjectsTable,
        {
          projects,
          page: state.page,
          limit: state.limit,
          count,
          onChange: () => refreshProjects(),
          onPageChange
        }
      ) })
    ] });
  };
  const useNoProjectsFoundStyles = styles.makeStyles(() => ({
    noProjectsFound: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }));
  const NoProjectsFound = ({}) => {
    const classes = useNoProjectsFoundStyles();
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.noProjectsFound, children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h4", align: "center", children: "No projects found, start by creating one" }) });
  };
  const useProjectsViewStyles = styles.makeStyles((theme) => ({
    projectsView: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "min-content 1fr min-content",
      minHeight: "100vh"
    },
    main: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(5),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }
  }));
  const ProjectBrowser = () => {
    const classes = useProjectsViewStyles();
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.projectsView, children: [
      /* @__PURE__ */ jsxRuntime.jsx(NavigationBar, {}),
      /* @__PURE__ */ jsxRuntime.jsx(Container, { maxWidth: "xl", children: /* @__PURE__ */ jsxRuntime.jsx(Grid, { container: true, justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(Grid, { item: true, xs: 8, children: /* @__PURE__ */ jsxRuntime.jsxs("main", { className: classes.main, children: [
        /* @__PURE__ */ jsxRuntime.jsx(CreateProjectArea, {}),
        /* @__PURE__ */ jsxRuntime.jsx(ListProjectsArea, {})
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(Footer, {})
    ] });
  };
  const deleteImageModalMachine = xstate.Machine(
    {
      type: "parallel",
      context: {
        message: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        deleteImageModal: {
          initial: "idle",
          states: {
            idle: {
              on: {
                REQUEST_IMAGE_DELETION: {
                  target: "deletingImage"
                }
              }
            },
            deletingImage: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    target: "success"
                  },
                  {
                    target: "idle"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.deleteImage.__typename === "SuccessPayload";
        }
      }
    }
  );
  const deleteImageMutation = client.gql`
  mutation deleteImage($input: DeleteImageInput!) {
    deleteImage(input: $input) {
      __typename
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const isErrorPayload$2 = (payload) => payload.__typename === "ErrorPayload";
  const DeleteImageModal = ({ imageId, onImageDeleted, onClose }) => {
    const [{ value, context }, dispatch] = react.useMachine(
      deleteImageModalMachine
    );
    const { toast, deleteImageModal } = value;
    const { message } = context;
    const [deleteImage, { loading, data, error }] = client.useMutation(deleteImageMutation);
    React.useEffect(() => {
      if (!loading) {
        if (error) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: error.message
          };
          dispatch(showToastEvent);
        }
        if (data) {
          const event2 = { type: "HANDLE_RESPONSE", data };
          dispatch(event2);
          const { deleteImage: deleteImage2 } = data;
          if (isErrorPayload$2(deleteImage2)) {
            const { message: message2 } = deleteImage2;
            const showToastEvent = { type: "SHOW_TOAST", message: message2 };
            dispatch(showToastEvent);
          }
        }
      }
    }, [loading, data, error, dispatch]);
    const onDeleteImage = (event2) => {
      const requestImageDeletionEvent = { type: "REQUEST_IMAGE_DELETION" };
      dispatch(requestImageDeletionEvent);
      event2.preventDefault();
      const variables = {
        input: {
          id: crypto.randomUUID(),
          imageId
        }
      };
      deleteImage({ variables });
    };
    React.useEffect(() => {
      if (deleteImageModal === "success") {
        onImageDeleted();
      }
    }, [deleteImageModal, onImageDeleted]);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { open: true, onClose, "aria-labelledby": "dialog-title", maxWidth: "xs", fullWidth: true, children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Delete the image" }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsx(DialogContentText, { children: "This action will delete the image and might break projects which use it. It cannot be reversed." }) }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "contained",
            disabled: deleteImageModal !== "idle",
            onClick: onDeleteImage,
            color: "primary",
            "data-testid": "delete-image",
            children: "Delete"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      )
    ] });
  };
  const isNameInvalid = (name) => name.trim().length < 3;
  const renameImageModalMachine = xstate.Machine(
    {
      type: "parallel",
      context: {
        name: null,
        nameMessage: "The name must contain at least 3 characters",
        nameIsInvalid: false,
        initialName: null,
        message: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        renameImageModal: {
          initial: "pristine",
          states: {
            pristine: {
              on: {
                CHANGE_NAME: [
                  {
                    cond: "isPristine",
                    target: "pristine",
                    actions: "updateName"
                  },
                  {
                    cond: "isInvalid",
                    target: "invalid",
                    actions: "updateName"
                  },
                  {
                    target: "valid",
                    actions: "updateName"
                  }
                ]
              }
            },
            valid: {
              on: {
                CHANGE_NAME: [
                  {
                    cond: "isPristine",
                    target: "pristine",
                    actions: "updateName"
                  },
                  {
                    cond: "isInvalid",
                    target: "invalid",
                    actions: "updateName"
                  },
                  {
                    target: "valid",
                    actions: "updateName"
                  }
                ],
                REQUEST_IMAGE_RENAMING: {
                  target: "renamingImage"
                }
              }
            },
            invalid: {
              on: {
                CHANGE_NAME: [
                  {
                    cond: "isPristine",
                    target: "pristine",
                    actions: "updateName"
                  },
                  {
                    cond: "isInvalid",
                    target: "invalid",
                    actions: "updateName"
                  },
                  {
                    target: "valid",
                    actions: "updateName"
                  }
                ]
              }
            },
            renamingImage: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    target: "success"
                  },
                  {
                    target: "valid"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isInvalid: (_, event2) => {
          const { name } = event2;
          return isNameInvalid(name);
        },
        isPristine: (context, event2) => {
          const { name } = event2;
          const { initialName } = context;
          return name === initialName;
        },
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.renameImage.__typename === "SuccessPayload";
        }
      },
      actions: {
        updateName: xstate.assign((_, event2) => {
          const { name } = event2;
          return { name, nameIsInvalid: isNameInvalid(name) };
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const renameImageMutation = client.gql`
  mutation renameImage($input: RenameImageInput!) {
    renameImage(input: $input) {
      __typename
      ... on ErrorPayload {
        message
      }
    }
  }
`;
  const isErrorPayload$1 = (payload) => payload.__typename === "ErrorPayload";
  const RenameImageModal = ({ imageId, initialImageName, onImageRenamed, onClose }) => {
    const [{ value, context }, dispatch] = react.useMachine(
      renameImageModalMachine,
      {
        context: {
          name: initialImageName,
          initialName: initialImageName
        }
      }
    );
    const { toast, renameImageModal } = value;
    const { name, nameIsInvalid, nameMessage, message } = context;
    const onNewName = (event2) => {
      const name2 = event2.target.value;
      const changeNameEvent = { type: "CHANGE_NAME", name: name2 };
      dispatch(changeNameEvent);
    };
    const [renameImage, { loading, data, error }] = client.useMutation(renameImageMutation);
    React.useEffect(() => {
      if (!loading) {
        if (error) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: error.message
          };
          dispatch(showToastEvent);
        }
        if (data) {
          const event2 = { type: "HANDLE_RESPONSE", data };
          dispatch(event2);
          const { renameImage: renameImage2 } = data;
          if (isErrorPayload$1(renameImage2)) {
            const { message: message2 } = renameImage2;
            const showToastEvent = { type: "SHOW_TOAST", message: message2 };
            dispatch(showToastEvent);
          }
        }
      }
    }, [loading, data, error, dispatch]);
    const onRenameImage = (event2) => {
      const requestImageRenamingEvent = { type: "REQUEST_IMAGE_RENAMING" };
      dispatch(requestImageRenamingEvent);
      event2.preventDefault();
      const variables = {
        input: {
          id: crypto.randomUUID(),
          imageId,
          newLabel: name
        }
      };
      renameImage({ variables });
    };
    React.useEffect(() => {
      if (renameImageModal === "success") {
        onImageRenamed();
      }
    }, [renameImageModal, onImageRenamed]);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { open: true, onClose, "aria-labelledby": "dialog-title", maxWidth: "xs", fullWidth: true, children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Rename the image" }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsx(
          TextField,
          {
            value: name,
            onChange: onNewName,
            error: nameIsInvalid,
            helperText: nameMessage,
            label: "Name",
            placeholder: "Enter the new image name",
            "data-testid": "name",
            autoFocus: true,
            fullWidth: true
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "contained",
            disabled: renameImageModal !== "valid",
            onClick: onRenameImage,
            color: "primary",
            "data-testid": "rename-image",
            children: "Rename"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      )
    ] });
  };
  const uploadImageModalMachine = xstate.Machine(
    {
      type: "parallel",
      context: {
        message: void 0,
        file: void 0
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        uploadImageModal: {
          initial: "pristine",
          states: {
            pristine: {
              on: {
                SELECT_IMAGE: {
                  target: "imageSelected",
                  actions: "updateSelectedFile"
                }
              }
            },
            imageSelected: {
              on: {
                REQUEST_IMAGE_UPLOADING: {
                  target: "uploadingImage"
                },
                SELECT_IMAGE: {
                  target: "imageSelected",
                  actions: "updateSelectedFile"
                }
              }
            },
            uploadingImage: {
              on: {
                HANDLE_RESPONSE: [
                  {
                    cond: "isResponseSuccessful",
                    target: "success"
                  },
                  {
                    target: "imageSelected"
                  }
                ]
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      guards: {
        isResponseSuccessful: (_, event2) => {
          const { data } = event2;
          return data.uploadImage.__typename === "UploadImageSuccessPayload";
        }
      },
      actions: {
        updateSelectedFile: xstate.assign((_, event2) => {
          const { file } = event2;
          return { file };
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const uploadImageMutationFile = client.gql`
  mutation uploadImage($input: UploadImageInput!) {
    uploadImage(input: $input) {
      __typename
      ... on UploadImageSuccessPayload {
        id
      }
      ... on ErrorPayload {
        message
      }
    }
  }
`.loc.source.body;
  const useUploadImageModalStyle = styles.makeStyles((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      "& > *": {
        marginBottom: theme.spacing(2)
      }
    }
  }));
  const isErrorPayload = (payload) => payload.__typename === "ErrorPayload";
  const UploadImageModal = ({ projectId, onImageUploaded, onClose }) => {
    const classes = useUploadImageModalStyle();
    const { httpOrigin } = React.useContext(siriusComponentsCore.ServerContext);
    const [{ value, context }, dispatch] = react.useMachine(
      uploadImageModalMachine
    );
    const { toast, uploadImageModal } = value;
    const { file, message } = context;
    const [label, setLabel] = React.useState("");
    const uploadImage = async (event2) => {
      const requestImageUploadingEvent = { type: "REQUEST_IMAGE_UPLOADING" };
      dispatch(requestImageUploadingEvent);
      event2.preventDefault();
      const variables = {
        input: {
          id: crypto.randomUUID(),
          editingContextId: projectId,
          label,
          file: null
          // the file will be send as a part of the multipart POST query.
        }
      };
      try {
        const { data, error } = await sendFile(httpOrigin, uploadImageMutationFile, variables, file);
        if (error) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: error.message
          };
          dispatch(showToastEvent);
        }
        if (data) {
          const event22 = { type: "HANDLE_RESPONSE", data };
          dispatch(event22);
          const { uploadImage: uploadImage2 } = data;
          if (isErrorPayload(uploadImage2)) {
            const { message: message2 } = uploadImage2;
            const showToastEvent = { type: "SHOW_TOAST", message: message2 };
            dispatch(showToastEvent);
          }
        }
      } catch (exception) {
        const showToastEvent = { type: "SHOW_TOAST", message: exception.toString() };
        dispatch(showToastEvent);
      }
    };
    const onFileSelected = (file2) => {
      const selectImageEvent = { type: "SELECT_IMAGE", file: file2 };
      dispatch(selectImageEvent);
    };
    React.useEffect(() => {
      if (uploadImageModal === "success") {
        onImageUploaded();
      }
    }, [uploadImageModal, onImageUploaded]);
    const canSubmit = uploadImageModal === "imageSelected";
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { open: true, onClose, "aria-labelledby": "dialog-title", fullWidth: true, children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { id: "dialog-title", children: "Upload new image" }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntime.jsxs("form", { id: "upload-form-id", onSubmit: uploadImage, encType: "multipart/form-data", className: classes.form, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            TextField,
            {
              label: "Label",
              name: "label",
              value: label,
              placeholder: "Label for the image",
              "data-testid": "label",
              inputProps: { "data-testid": "label-input" },
              autoFocus: true,
              onChange: (event2) => setLabel(event2.target.value),
              disabled: uploadImageModal === "uploadingImage"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(FormGroup, { children: /* @__PURE__ */ jsxRuntime.jsx(FileUpload, { onFileSelected, "data-testid": "file" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "contained",
            disabled: !canSubmit,
            color: "primary",
            type: "submit",
            form: "upload-form-id",
            "data-testid": "upload-image",
            children: "Upload"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      )
    ] });
  };
  const imagesViewMachine = xstate.Machine(
    {
      type: "parallel",
      context: {
        images: [],
        modalToDisplay: null,
        message: null,
        currentImage: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        imagesSettings: {
          initial: "loading",
          states: {
            loading: {
              on: {
                HANDLE_FETCHED_IMAGES: [
                  {
                    cond: "isEmpty",
                    target: "empty",
                    actions: "updateImages"
                  },
                  {
                    target: "loaded",
                    actions: "updateImages"
                  }
                ]
              }
            },
            loaded: {
              on: {
                HANDLE_FETCHED_IMAGES: [
                  {
                    cond: "isEmpty",
                    target: "empty",
                    actions: "updateImages"
                  },
                  {
                    target: "loaded",
                    actions: "updateImages"
                  }
                ],
                OPEN_MODAL: [
                  {
                    actions: "openModal"
                  }
                ],
                CLOSE_MODAL: [
                  {
                    actions: "closeModal"
                  }
                ],
                SELECT_IMAGE: [
                  {
                    actions: "selectImage"
                  }
                ]
              }
            },
            empty: {
              type: "final",
              on: {
                HANDLE_FETCHED_IMAGES: [
                  {
                    cond: "isEmpty",
                    target: "empty",
                    actions: "updateImages"
                  },
                  {
                    target: "loaded",
                    actions: "updateImages"
                  }
                ],
                OPEN_MODAL: [
                  {
                    actions: "openModal"
                  }
                ],
                CLOSE_MODAL: [
                  {
                    actions: "closeModal"
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      guards: {
        isEmpty: (_, event2) => {
          const {
            data: {
              viewer: {
                project: { customImages }
              }
            }
          } = event2;
          return !customImages || customImages.length === 0;
        }
      },
      actions: {
        updateImages: xstate.assign((_, event2) => {
          const {
            data: {
              viewer: {
                project: { customImages }
              }
            }
          } = event2;
          return { images: customImages };
        }),
        openModal: xstate.assign((_, event2) => {
          const { modalToDisplay } = event2;
          return { modalToDisplay };
        }),
        closeModal: xstate.assign((_) => {
          return { modalToDisplay: null };
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        }),
        selectImage: xstate.assign((_, event2) => {
          const { image } = event2;
          return { currentImage: image };
        })
      }
    }
  );
  const getProjectCustomImagesQuery = client.gql`
  query projectCustomImages($projectId: ID!) {
    viewer {
      project(projectId: $projectId) {
        customImages {
          id
          label
          url
        }
      }
    }
  }
`;
  const useProjectImagesSettingsStyles = styles.makeStyles((theme) => ({
    imageSettingsViewContainer: {
      display: "flex",
      flexDirection: "column"
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(5)
    },
    actions: {
      display: "flex",
      flexDirection: "row",
      "& > *": {
        marginLeft: theme.spacing(2)
      }
    }
  }));
  const ProjectImagesSettings = () => {
    const classes = useProjectImagesSettingsStyles();
    const { projectId } = reactRouterDom.useParams();
    const [{ value, context }, dispatch] = react.useMachine(imagesViewMachine);
    const { toast, imagesSettings } = value;
    const { images, modalToDisplay, currentImage, message } = context;
    const { loading, data, error, refetch } = client.useQuery(
      getProjectCustomImagesQuery,
      {
        variables: {
          projectId
        }
      }
    );
    React.useEffect(() => {
      if (!loading) {
        if (error) {
          const showToastEvent = {
            type: "SHOW_TOAST",
            message: "An unexpected error has occurred, please refresh the page"
          };
          dispatch(showToastEvent);
        }
        if (data) {
          const fetchedImagesEvent = { type: "HANDLE_FETCHED_IMAGES", data };
          dispatch(fetchedImagesEvent);
        }
      }
    }, [loading, data, error, dispatch]);
    const onTriggerUpload = () => dispatch({ type: "OPEN_MODAL", modalToDisplay: "Upload" });
    const triggerRename = (image) => {
      dispatch({ type: "SELECT_IMAGE", image });
      dispatch({ type: "OPEN_MODAL", modalToDisplay: "Rename" });
    };
    const triggerDelete = (image) => {
      dispatch({ type: "SELECT_IMAGE", image });
      dispatch({ type: "OPEN_MODAL", modalToDisplay: "Delete" });
    };
    const closeModal = () => {
      dispatch({ type: "SELECT_IMAGE", image: null });
      dispatch({ type: "CLOSE_MODAL" });
    };
    const refreshImages = () => {
      dispatch({ type: "CLOSE_MODAL" });
      refetch();
    };
    let modal = null;
    if (modalToDisplay === "Upload") {
      modal = /* @__PURE__ */ jsxRuntime.jsx(
        UploadImageModal,
        {
          projectId,
          onImageUploaded: () => {
            refreshImages();
            closeModal();
          },
          onClose: closeModal
        }
      );
    } else if (modalToDisplay === "Rename") {
      modal = /* @__PURE__ */ jsxRuntime.jsx(
        RenameImageModal,
        {
          imageId: currentImage.id,
          initialImageName: currentImage.label,
          onImageRenamed: () => {
            refreshImages();
            closeModal();
          },
          onClose: closeModal
        }
      );
    } else if (modalToDisplay === "Delete") {
      modal = /* @__PURE__ */ jsxRuntime.jsx(
        DeleteImageModal,
        {
          imageId: currentImage.id,
          onImageDeleted: () => {
            refreshImages();
            closeModal();
          },
          onClose: closeModal
        }
      );
    }
    let main = /* @__PURE__ */ jsxRuntime.jsx(Message, { content: "Loading..." });
    if (imagesSettings === "loaded") {
      main = /* @__PURE__ */ jsxRuntime.jsx(ImagesTable, { images, onTriggerRename: triggerRename, onTriggerDelete: triggerDelete });
    } else if (imagesSettings === "empty") {
      main = /* @__PURE__ */ jsxRuntime.jsx(Message, { content: "No project images available, start by uploading one" });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.imageSettingsViewContainer, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.header, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h3", children: "Project Images" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.actions, children: /* @__PURE__ */ jsxRuntime.jsx(Button, { "data-testid": "upload-image", color: "primary", variant: "outlined", onClick: onTriggerUpload, children: "Upload" }) })
        ] }),
        main,
        modal
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        siriusComponentsCore.Toast,
        {
          message,
          open: toast === "visible",
          onClose: () => dispatch({ type: "HIDE_TOAST" })
        }
      )
    ] });
  };
  const Message = ({ content }) => {
    return /* @__PURE__ */ jsxRuntime.jsx(Grid, { container: true, justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h4", align: "center", gutterBottom: true, children: content }) }) });
  };
  const ImagesTable = ({ images, onTriggerRename, onTriggerDelete }) => {
    return /* @__PURE__ */ jsxRuntime.jsx(Paper, { children: /* @__PURE__ */ jsxRuntime.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntime.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs("colgroup", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("col", { width: "35%" }),
        /* @__PURE__ */ jsxRuntime.jsx("col", { width: "60%" }),
        /* @__PURE__ */ jsxRuntime.jsx("col", { width: "5%" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntime.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(TableCell, { variant: "head", children: "Label" }),
        /* @__PURE__ */ jsxRuntime.jsx(TableCell, { variant: "head", children: "URL" }),
        /* @__PURE__ */ jsxRuntime.jsx(TableCell, { variant: "head", align: "center", children: "Delete" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(TableBody, { "data-testid": "images", children: images.map((image) => /* @__PURE__ */ jsxRuntime.jsx(
        ImageRow,
        {
          image,
          onTriggerRename,
          onTriggerDelete
        },
        image.id
      )) })
    ] }) }) });
  };
  const ImagePreviewTooltip = styles.withStyles((_) => ({
    tooltip: {
      backgroundColor: "#f5f5f5",
      color: "rgba(0, 0, 0)",
      maxWidth: 220,
      border: "1px solid #dadde9"
    }
  }))(Tooltip);
  const ImageRow = ({ image, onTriggerRename, onTriggerDelete }) => {
    const { httpOrigin } = React.useContext(siriusComponentsCore.ServerContext);
    const [showEditIcon, setShowEditIcon] = React.useState(false);
    return /* @__PURE__ */ jsxRuntime.jsxs(TableRow, { hover: true, onMouseEnter: () => setShowEditIcon(true), onMouseLeave: () => setShowEditIcon(false), children: [
      /* @__PURE__ */ jsxRuntime.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntime.jsxs(Typography, { children: [
        image.label,
        " ",
        showEditIcon ? /* @__PURE__ */ jsxRuntime.jsx(
          IconButton,
          {
            onClick: () => {
              onTriggerRename(image);
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(EditOutlinedIcon, { fontSize: "small" })
          }
        ) : null
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { component: "div", children: /* @__PURE__ */ jsxRuntime.jsxs(Box, { fontFamily: "Monospace", fontSize: "small", children: [
        image.url,
        " ",
        /* @__PURE__ */ jsxRuntime.jsx(Tooltip, { title: "Copy URL to clipboard", children: /* @__PURE__ */ jsxRuntime.jsx(IconButton, { onClick: () => navigator.clipboard.writeText(image.url), children: /* @__PURE__ */ jsxRuntime.jsx(FileCopyOutlinedIcon, { fontSize: "small" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          ImagePreviewTooltip,
          {
            enterDelay: 250,
            interactive: true,
            title: /* @__PURE__ */ jsxRuntime.jsx("img", { src: httpOrigin + "/api/images" + image.url, width: 120 }),
            children: /* @__PURE__ */ jsxRuntime.jsx(IconButton, { children: /* @__PURE__ */ jsxRuntime.jsx(ImageOutlinedIcon, { fontSize: "small" }) })
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntime.jsx(
        IconButton,
        {
          onClick: () => {
            onTriggerDelete(image);
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(DeleteIcon, {})
        }
      ) })
    ] });
  };
  const useProjectSettingsViewStyles = styles.makeStyles((theme) => ({
    projectSettingsView: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "min-content 1fr min-content",
      minHeight: "100vh"
    },
    main: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }
  }));
  const ProjectSettingsView = () => {
    const classes = useProjectSettingsViewStyles();
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.projectSettingsView, children: [
      /* @__PURE__ */ jsxRuntime.jsx(NavigationBar, {}),
      /* @__PURE__ */ jsxRuntime.jsx("main", { className: classes.main, children: /* @__PURE__ */ jsxRuntime.jsx(Container, { maxWidth: "xl", children: /* @__PURE__ */ jsxRuntime.jsx(Grid, { container: true, justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(Grid, { item: true, xs: 8, children: /* @__PURE__ */ jsxRuntime.jsx(ProjectImagesSettings, {}) }) }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(Footer, {})
    ] });
  };
  const uploadProjectMachine = xstate.Machine(
    {
      id: "UploadProjectView",
      type: "parallel",
      context: {
        file: null,
        message: null,
        newProjectId: null
      },
      states: {
        toast: {
          initial: "hidden",
          states: {
            hidden: {
              on: {
                SHOW_TOAST: {
                  target: "visible",
                  actions: "setMessage"
                }
              }
            },
            visible: {
              on: {
                HIDE_TOAST: {
                  target: "hidden",
                  actions: "clearMessage"
                }
              }
            }
          }
        },
        uploadProjectView: {
          initial: "pristine",
          states: {
            pristine: {
              on: {
                HANDLE_SELECTED_FILE: {
                  target: "fileSelected",
                  actions: "setFile"
                }
              }
            },
            fileSelected: {
              on: {
                HANDLE_UPLOAD: {
                  target: "uploading"
                },
                HANDLE_SELECTED_FILE: {
                  target: "fileSelected",
                  actions: "setFile"
                }
              }
            },
            uploading: {
              on: {
                HANDLE_RESPONSE: {
                  target: "success",
                  actions: "setNewProjectId"
                }
              }
            },
            success: {
              type: "final"
            }
          }
        }
      }
    },
    {
      actions: {
        setFile: xstate.assign((_, event2) => {
          const { file } = event2;
          return { file };
        }),
        setNewProjectId: xstate.assign((_, event2) => {
          const { data } = event2;
          return { newProjectId: data.uploadProject.project.id };
        }),
        setMessage: xstate.assign((_, event2) => {
          const { message } = event2;
          return { message };
        }),
        clearMessage: xstate.assign((_) => {
          return { message: null };
        })
      }
    }
  );
  const uploadProjectMutation = client.gql`
  mutation uploadProject($input: UploadProjectInput!) {
    uploadProject(input: $input) {
      __typename
      ... on UploadProjectSuccessPayload {
        project {
          id
        }
      }
      ... on ErrorPayload {
        message
      }
    }
  }
`.loc.source.body;
  const useUploadProjectViewStyles = styles.makeStyles((theme) => ({
    uploadProjectViewContainer: {
      display: "flex",
      flexDirection: "column",
      paddingTop: theme.spacing(8)
    },
    uploadProjectView: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "min-content 1fr min-content",
      minHeight: "100vh"
    },
    main: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      paddingBottom: theme.spacing(2)
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "start"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      "& > *": {
        marginBottom: theme.spacing(2)
      }
    }
  }));
  const UploadProjectView = () => {
    const classes = useUploadProjectViewStyles();
    const [{ value, context }, dispatch] = react.useMachine(uploadProjectMachine);
    const { uploadProjectView, toast } = value;
    const { file, newProjectId, message } = context;
    const { httpOrigin } = React.useContext(siriusComponentsCore.ServerContext);
    const onUploadProject = async (event2) => {
      event2.preventDefault();
      const variables = {
        input: {
          id: crypto.randomUUID(),
          file: null
        }
      };
      try {
        dispatch({ type: "HANDLE_UPLOAD" });
        const response = await sendFile(httpOrigin, uploadProjectMutation, variables, file);
        const { data, error } = response;
        if (error) {
          dispatch({ type: "SHOW_TOAST", message: "An unexpected error has occurred, please refresh the page" });
        }
        if (data) {
          const typename = data.uploadProject.__typename;
          if (typename === "UploadProjectSuccessPayload") {
            dispatch({ type: "HANDLE_RESPONSE", data });
          } else if (typename === "ErrorMessage") {
            dispatch({ type: "SHOW_TOAST", message: data.uploadProject.message });
          }
        }
      } catch (exception) {
        dispatch({ type: "SHOW_TOAST", message: "An unexpected error has occurred, please refresh the page" });
      }
    };
    const onFileSelected = (file2) => {
      dispatch({ type: "HANDLE_SELECTED_FILE", file: file2 });
    };
    if (uploadProjectView === "success") {
      return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: `/projects/${newProjectId}/edit`, push: true });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.uploadProjectView, children: [
      /* @__PURE__ */ jsxRuntime.jsx(NavigationBar, {}),
      /* @__PURE__ */ jsxRuntime.jsx("main", { className: classes.main, children: /* @__PURE__ */ jsxRuntime.jsx(Container, { maxWidth: "sm", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.uploadProjectViewContainer, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes.titleContainer, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h2", align: "center", gutterBottom: true, children: "Upload a project" }),
          /* @__PURE__ */ jsxRuntime.jsx(Typography, { variant: "h4", align: "center", gutterBottom: true, children: "Start with an existing project" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(Paper, { children: /* @__PURE__ */ jsxRuntime.jsxs("form", { onSubmit: onUploadProject, encType: "multipart/form-data", className: classes.form, children: [
          /* @__PURE__ */ jsxRuntime.jsx(FileUpload, { onFileSelected, "data-testid": "file" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes.buttons, children: /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "contained",
              type: "submit",
              color: "primary",
              disabled: uploadProjectView !== "fileSelected",
              "data-testid": "upload-project",
              children: "Upload"
            }
          ) })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsCore.Toast, { message, open: toast === "visible", onClose: () => dispatch({ type: "HIDE_TOAST" }) })
    ] });
  };
  const routerExtensionPoint = {
    identifier: "router#routes",
    fallback: []
  };
  const Router = () => {
    const { data: routes } = siriusComponentsCore.useData(routerExtensionPoint);
    return /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Switch, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { exact: true, path: "/new/project", component: withErrorBoundary(NewProjectView) }),
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { exact: true, path: "/upload/project", component: withErrorBoundary(UploadProjectView) }),
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { exact: true, path: "/projects", component: withErrorBoundary(ProjectBrowser) }),
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { exact: true, path: "/projects/:projectId/edit/:representationId?", component: withErrorBoundary(EditProjectView) }),
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { exact: true, path: "/projects/:projectId/settings", component: withErrorBoundary(ProjectSettingsView) }),
      routes.map((props, index) => /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { ...props }, index)),
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: "/projects" })
    ] });
  };
  const baseTheme = styles.createTheme({
    ...siriusComponentsCore.theme,
    palette: {
      type: "light",
      primary: {
        main: "#BE1A78",
        dark: "#851254",
        light: "#CB4793"
      },
      secondary: {
        main: "#261E58",
        dark: "#1A153D",
        light: "#514B79"
      },
      text: {
        primary: "#261E58",
        disabled: "#B3BFC5",
        hint: "#B3BFC5"
      },
      error: {
        main: "#DE1000",
        dark: "#9B0B00",
        light: "#E43F33"
      },
      success: {
        main: "#43A047",
        dark: "#327836",
        light: "#4EBA54"
      },
      warning: {
        main: "#FF9800",
        dark: "#D98200",
        light: "#FFB800"
      },
      info: {
        main: "#2196F3",
        dark: "#1D7DCC",
        light: "#24A7FF"
      },
      divider: "#B3BFC5",
      navigation: {
        leftBackground: "#BE1A7880",
        rightBackground: "#261E5880"
      },
      navigationBar: {
        border: "#BE1A78",
        background: "#261E58"
      },
      selected: "#BE1A78",
      action: {
        hover: "#BE1A7826",
        selected: "#BE1A7842"
      }
    }
  });
  const siriusWebTheme = styles.createTheme(
    {
      overrides: {
        MuiAvatar: {
          colorDefault: {
            backgroundColor: baseTheme.palette.primary.main
          }
        },
        MuiTooltip: {
          tooltip: {
            backgroundColor: baseTheme.palette.common.black
          }
        }
      }
    },
    baseTheme
  );
  require("dotenv").config();
  const API_SERVER_URL = process.env.API_SERVER_URL;
  const PapyGameView = () => {
    reactRouterDom.useParams();
    const [text, setText] = React.useState("Loading...");
    const [missing, setMissing] = React.useState({});
    const [constraints, setConstraints] = React.useState({});
    const [error, setError] = React.useState(null);
    const [isButtonClicked, setIsButtonClicked] = React.useState(false);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [done, setDone] = React.useState(false);
    const [graderResults, setGraderResults] = React.useState("Loading...");
    const handleClick = () => {
      setIsDialogOpen(true);
    };
    const handleClose = () => {
      setIsDialogOpen(false);
    };
    const handleConfirm = () => {
      setIsDialogOpen(false);
      setIsButtonClicked(true);
    };
    React.useEffect(() => {
      if (isButtonClicked) {
        fetchGraderResults();
      } else {
        fetchText();
        fetchStudentConstraints();
        fetchTeacherConstraints();
      }
    }, [isButtonClicked]);
    const fetchText = () => {
      const getData = {
        project_id: "6622b049ab72ca0845212bbc"
      };
      const queryString = new URLSearchParams(getData).toString();
      fetch(API_SERVER_URL + `/api/v1/assignment?${queryString}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.text();
      }).then((data) => {
        setText(data);
      }).catch((error2) => {
        setError(error2);
      });
    };
    const fetchStudentConstraints = () => {
      fetch(API_SERVER_URL + `/api/v1/constraints?user=student`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      }).then((data) => {
        setMissing(data);
      }).catch((error2) => {
        setError(error2);
      });
    };
    const fetchTeacherConstraints = () => {
      fetch(API_SERVER_URL + `/api/v1/constraints?user=teacher`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      }).then((data) => {
        setConstraints(data);
      }).catch((error2) => {
        setError(error2);
      });
    };
    const styles2 = {
      textContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "95%"
        // padding: "0 20px" // Aggiunge un po' di spazio ai lati per migliorare la leggibilità
      },
      text: {
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        marginTop: "10px",
        height: "85vh",
        maxHeight: "85vh",
        // Altezza massima del testo prima dello scrolling
        overflowY: "auto"
        // Abilita lo scrolling verticale per il testo lungo
      },
      missingContainer: {},
      newContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        textAlign: "center"
      },
      error: {
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        color: "red"
      },
      buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "5%"
      },
      button: {
        width: "50%",
        height: "50px",
        backgroundColor: "#BE1A78",
        borderRadius: "8px",
        fontSize: "16px",
        lineHeight: "normal",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    };
    const combinedConstraints = Object.keys(missing).reduce((acc, key) => {
      if (missing[key] !== void 0 && constraints[key] !== void 0) {
        acc[key] = `${missing[key]} su ${constraints[key]}`;
      }
      return acc;
    }, {});
    const fetchGraderResults = async () => {
      try {
        const response = await fetch(
          API_SERVER_URL + `/api/v1/graderResults?user=student`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.text();
        setGraderResults(data.split(/\r?\n/));
        let matches = graderResults[0].match(/\d+(\.\d+)?/g);
        let studentScore = parseFloat(matches[0]);
        let totalScore = parseFloat(matches[1]);
        let sufficientScore = totalScore * 0.6;
        if (studentScore >= sufficientScore) {
        } else {
        }
        setIsButtonClicked(false);
        setDone(true);
      } catch (error2) {
        setError(error2);
      }
    };
    if (done) {
      return jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [
          jsxRuntime.jsx(core.Typography, {
            variant: "body1",
            style: styles2.text,
            children: graderResults.map(
              (line, index) => jsxRuntime.jsxs(
                jsxRuntime.Fragment,
                {
                  children: [line, jsxRuntime.jsx("br")]
                },
                index
              )
            )
          })
        ]
      });
    } else {
      return jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [
          jsxRuntime.jsxs("div", {
            style: styles2.textContainer,
            children: [
              jsxRuntime.jsx(core.Typography, {
                variant: "body1",
                style: styles2.text,
                children: text
              }),
              error && jsxRuntime.jsx(core.Typography, {
                variant: "body1",
                style: styles2.error,
                children: `Error: ${error.message}`
              })
            ]
          }),
          jsxRuntime.jsx("div", {
            style: styles2.textContainer,
            // Ottenere la lista delle missing parts via API e visualizzarla
            children: Object.entries(combinedConstraints).map(
              ([key, value]) => jsxRuntime.jsxs(
                "div",
                {
                  children: [key, ": ", value]
                },
                key
              )
            )
          }),
          jsxRuntime.jsx("div", {
            style: styles2.buttonContainer,
            children: jsxRuntime.jsx(core.Button, {
              variant: "contained",
              color: "primary",
              style: styles2.button,
              onClick: handleClick,
              children: "Submit"
            })
          }),
          jsxRuntime.jsx(core.Dialog, {
            open: isDialogOpen,
            onClose: handleClose,
            children: jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [
                jsxRuntime.jsx(core.DialogTitle, {
                  children: "Confirmation"
                }),
                jsxRuntime.jsxs(core.DialogContent, {
                  children: [
                    jsxRuntime.jsx(core.DialogContentText, {
                      children: "Are you sure you want to submit the exercise?"
                    })
                  ]
                }),
                jsxRuntime.jsxs(core.DialogActions, {
                  children: [
                    jsxRuntime.jsx(core.Button, {
                      onClick: handleClose,
                      color: "primary",
                      children: "Cancel"
                    }),
                    jsxRuntime.jsx(core.Button, {
                      onClick: handleConfirm,
                      color: "primary",
                      children: "Confirm"
                    })
                  ]
                })
              ]
            })
          })
        ]
      });
    }
  };
  const style = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    minHeight: "100vh"
  };
  const SiriusWebApplication = ({
    httpOrigin,
    wsOrigin,
    extensionRegistry,
    theme,
    children
  }) => {
    const siriusWebTheme$1 = theme ? theme : siriusWebTheme;
    let nodeTypeRegistryValue = { ...defaultNodeTypeRegistry };
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === DiagramRepresentationConfiguration) {
        const { nodeTypeRegistry } = child.props;
        if (nodeTypeRegistry) {
          nodeTypeRegistryValue = nodeTypeRegistry;
        }
      }
    });
    const getRepresentationPath = (editingContextId, representationId) => {
      return `/projects/${editingContextId}/edit/${representationId}`;
    };
    const workbenchViewContributions = [
      {
        side: "left",
        title: "Explorer",
        icon: /* @__PURE__ */ jsxRuntime.jsx(AccountTreeIcon, {}),
        component: siriusComponentsTrees.ExplorerView
      },
      {
        side: "left",
        title: "Validation",
        icon: /* @__PURE__ */ jsxRuntime.jsx(WarningIcon, {}),
        component: siriusComponentsValidation.ValidationView
      },
      {
        side: "left",
        title: "Papy Game",
        icon: /* @__PURE__ */ jsxRuntime.jsx(icons.School, {}),
        component: PapyGameView
      },
      {
        side: "right",
        title: "Details",
        icon: /* @__PURE__ */ jsxRuntime.jsx(MenuIcon, {}),
        component: siriusComponentsForms.DetailsView
      },
      {
        side: "right",
        title: "Representations",
        icon: /* @__PURE__ */ jsxRuntime.jsx(Filter, {}),
        component: siriusComponentsForms.RepresentationsView
      },
      {
        side: "right",
        title: "Related Elements",
        icon: /* @__PURE__ */ jsxRuntime.jsx(LinkIcon, {}),
        component: siriusComponentsForms.RelatedElementsView
      }
    ];
    const internalExtensionRegistry = new siriusComponentsCore.ExtensionRegistry();
    internalExtensionRegistry.addComponent(siriusComponentsCore.workbenchMainAreaExtensionPoint, { Component: OnboardArea });
    internalExtensionRegistry.putData(siriusComponentsCore.workbenchViewContributionExtensionPoint, { data: workbenchViewContributions });
    if (extensionRegistry) {
      internalExtensionRegistry.addAll(extensionRegistry);
    }
    return /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsCore.ExtensionProvider, { registry: internalExtensionRegistry, children: /* @__PURE__ */ jsxRuntime.jsx(ApolloGraphQLProvider, { httpOrigin, wsOrigin, children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.BrowserRouter, { children: /* @__PURE__ */ jsxRuntime.jsxs(styles.ThemeProvider, { theme: siriusWebTheme$1, children: [
      /* @__PURE__ */ jsxRuntime.jsx(CssBaseline, {}),
      /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsCore.ServerContext.Provider, { value: { httpOrigin }, children: /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsCore.RepresentationPathContext.Provider, { value: { getRepresentationPath }, children: /* @__PURE__ */ jsxRuntime.jsx(ToastProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsCore.ConfirmationDialogContextProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(RepresentationContextProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(siriusComponentsDiagrams.NodeTypeContext.Provider, { value: nodeTypeRegistryValue, children: /* @__PURE__ */ jsxRuntime.jsx("div", { style, children: /* @__PURE__ */ jsxRuntime.jsx(Router, {}) }) }) }) }) }) }) })
    ] }) }) }) });
  };
  exports2.DiagramRepresentationConfiguration = DiagramRepresentationConfiguration;
  exports2.SiriusWebApplication = SiriusWebApplication;
  exports2.apolloClientOptionsConfigurersExtensionPoint = apolloClientOptionsConfigurersExtensionPoint;
  exports2.cacheOptionsConfigurersExtensionPoint = cacheOptionsConfigurersExtensionPoint;
  exports2.httpOptionsConfigurersExtensionPoint = httpOptionsConfigurersExtensionPoint;
  exports2.navigationBarIconExtensionPoint = navigationBarIconExtensionPoint;
  exports2.navigationBarMenuExtensionPoint = navigationBarMenuExtensionPoint;
  exports2.projectActionButtonMenuItemExtensionPoint = projectActionButtonMenuItemExtensionPoint;
  exports2.projectsTableRowExtensionPoint = projectsTableRowExtensionPoint;
  exports2.routerExtensionPoint = routerExtensionPoint;
  exports2.webSocketOptionsConfigurersExtensionPoint = webSocketOptionsConfigurersExtensionPoint;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});

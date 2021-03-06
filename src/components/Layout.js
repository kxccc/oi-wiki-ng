import grey from '@material-ui/core/colors/grey'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EditIcon from '@material-ui/icons/Edit'
import Loadable from 'react-loadable'
import BackTop from './BackTop'
import Footer from './Footer'
import Meta from './Meta'
import NavAndDrawer from './NavAndDrawer'
import ToC from './Toc'
import EditWarn from './EditWarn'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    [theme.breakpoints.down('md')]: {
      minHeight: 64,
    },
    minHeight: 48 + 64,
    alignItems: 'flex-start',
  },
  content: {
    flexGrow: 1,
    width: '100%',
    overflow: 'inherit',
  },
  main: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
    minHeight: '100vh',
    overflow: 'inherit',
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  footer: {
    background: grey[200],
    color: grey[700],
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      marginLeft: 250,
    },
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: 250,
    },
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  iconButton: {
    float: 'right',
  },
}))

const LazyComment = Loadable({
  loader: () => import('./Comment'),
  // eslint-disable-next-line react/display-name
  loading: () => <div />,
})

function myLayout ({
  children,
  location,
  authors,
  title,
  description,
  tags,
  toc,
  relativePath,
  modifiedTime,
  noMeta,
  noComment,
  noEdit,
  noToC,
  overflow,
}) {
  const classes = useStyles()
  const theme = useTheme()
  // const pageTitle = title === 'OI Wiki' ? title : `${title} - OI Wiki`
  const displayToC = toc && toc.items && noToC !== 'true'
  const gridWidthMdUp = overflow === 'true' ? 12 : 10
  const [dialogOpen, setDialogOpen] = useState(false)
  const descriptionRes = description || 'OI Wiki 是一个编程竞赛知识整合站点，提供有趣又实用的编程竞赛知识以及其他有帮助的内容，帮助广大编程竞赛爱好者更快更深入地学习编程竞赛'
  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>{`${title === 'OI Wiki' ? '' : title + ' - '}OI Wiki`}</title>
        <meta name="description" content={descriptionRes} />
      </Helmet>
      <EditWarn relativePath={relativePath} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <NavAndDrawer pathname={location.pathname} />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={gridWidthMdUp}
          lg={gridWidthMdUp}
          xl={gridWidthMdUp}
        >
          <div className={classes.toolbar} />
          <div className={classes.container}>
            <main className={classes.content}>
              <div className={classes.main}>
                <Grid container spacing={2}>
                  <Grid item xs>
                    <Typography variant="h4" component="h1">
                      {title}
                    </Typography>
                  </Grid>
                  {noEdit === 'false' && (
                    <Grid item xs={1}>
                      <Tooltip title="编辑页面" placement="left" arrow>
                        <IconButton
                          onClick={() => setDialogOpen(true)}
                          className={classes.iconButton}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  )}
                </Grid>
                <Divider className={classes.divider} />
                <Typography variant="body1" component="div">
                  {children}
                </Typography>
                <Meta
                  authors={authors}
                  tags={tags}
                  relativePath={relativePath}
                  modifiedTime={modifiedTime}
                  noMeta={noMeta}
                />
                {noComment === 'false' && (
                  <div style={{ width: '100%', marginTop: theme.spacing(2) }}>
                    <ExpansionPanel variant={'outlined'}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="comment"
                      >
                        <Typography className={classes.heading}>
                          评论
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Container>
                          <LazyComment title={title} />
                        </Container>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>
                )}
              </div>
            </main>
          </div>
        </Grid>
        {displayToC && (
          <Grid item xs>
            <ToC toc={toc} pathname={location.pathname} />
          </Grid>
        )}
      </Grid>
      <Divider />
      <div className={classes.footer}>
        <Footer />
      </div>
      <BackTop />
    </>
  )
}

export default myLayout

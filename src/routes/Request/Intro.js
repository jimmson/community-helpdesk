import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { LangBar } from "../../components/Bar";
import useLocale, { setLocale } from "../../hooks/useLocale";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ReactComponent as PayPal } from "../../assets/payPal.svg";
import { ReactComponent as Bitcoin } from "../../assets/bitcoin.svg";
import { ReactComponent as Seperator } from "../../assets/seperator.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Intro = () => {
  const classes = useStyles();
  const [{ locale, locales, loading }] = useLocale();

  return (
    <Grid container spacing={0} direction="row-reverse">
      <Grid item md={7} xs={12}>
        <Box p={2} className="illustration">
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="flex-end"
          >
            <p className="quote">
              <FormattedMessage id="landing.content.quote" />
            </p>
          </Grid>
        </Box>
      </Grid>

      <Grid item md={5} xs={12}>
        <Box p={6} style={{ height: "100%" }}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="flex-start"
            justify="space-around"
            style={{ minHeight: "100%" }}
          >
            <Box>
              {!loading && (
                <Box p={2}>
                  <LangBar
                    locales={locales}
                    selectLanguage={(languageCode) => setLocale(languageCode)}
                    current={locale}
                  />
                </Box>
              )}

              <Box p={4} className="logo"></Box>

              <h1 className="text-alpha">
                <FormattedMessage id="landing.content.header" />
              </h1>

              <p className="text-alpha">
                <FormattedMessage id="landing.content.body" />
              </p>

              <Link to="/about">
                <p className="text-alpha">
                  ⟶{" "}
                  <span className="link">
                    {" "}
                    <FormattedMessage id="landing.buttons.more" />
                  </span>
                </p>
              </Link>

              <Box className={classes.root} width={1}>
                <Link to="/request">
                  <CustomButton
                    titleId="landing.buttons.request"
                    modifier="primary"
                  />
                </Link>

                <Link to="/app">
                  <CustomButton
                    titleId="landing.buttons.offer"
                    modifier="primary"
                  />
                </Link>
              </Box>
            </Box>
            <Grid container spacing={0} direction="column" alignItems="center">
              <h2 className="text-alpha">
                <FormattedMessage id="landing.donate.header" />
              </h2>

              <h3 className="text-alpha">
                <FormattedMessage id="landing.donate.message" />
              </h3>

              <Box className={classes.root} width={1}>
                <PayPal />
                <Seperator />
                <Bitcoin />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Intro;

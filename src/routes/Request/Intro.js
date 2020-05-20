import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import BitcoinButton from "../../components/BitcoinButton/BitcoinButton";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { LangBar } from "../../components/Bar";
import useLocale, { setLocale } from "../../hooks/useLocale";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
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
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="flex-start"
            >
              {!loading && (
                <Box p={2}>
                  <LangBar
                    locales={locales}
                    selectLanguage={(languageCode) => setLocale(languageCode)}
                    current={locale}
                  />
                </Box>
              )}

              <Box className="logo" p={4} width={1}></Box>

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
            </Grid>
            <Grid container spacing={0} direction="column" alignItems="center">
              <h2 className="text-alpha">
                <FormattedMessage id="landing.donate.header" />
              </h2>

              <h3 className="text-alpha">
                <FormattedMessage id="landing.donate.message" />
              </h3>

              <Box className={classes.root} width={1}>
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="XYBPXVND45NPL"
                  />
                  <input
                    type="image"
                    src="https://covidsa.help/payPal.svg"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                  />
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypal.com/en_ZA/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
                <Seperator />
                <BitcoinButton address="3BaiawemyKCNW1ND5BD3YH48kQrArW81Sy" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Intro;

import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { LangBar } from "../../components/Bar";
import useLocale, { setLocale } from "../../hooks/useLocale";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const About = () => {
  const [{ locale, locales, loading }] = useLocale();

  return (
    <Grid container spacing={0}>
      <Grid item md={5} xs={12}>
        <div className="illustration" />
      </Grid>

      <Grid item md={7} xs={12}>
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

              <h1 className="text-alpha">
                <FormattedMessage id="about.content.header" />
              </h1>

              <h2 className="text-alpha">
                <FormattedMessage id="about.content.title" />
              </h2>

              <p className="text-alpha">
                <FormattedMessage id="about.content.body" />
              </p>

              <Link to="/">
                <p className="text-alpha">
                  ⟵{" "}
                  <span className="link">
                    {" "}
                    <FormattedMessage id="about.buttons.back" />
                  </span>
                </p>
              </Link>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;

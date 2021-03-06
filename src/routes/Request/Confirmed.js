import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormikContext } from "formik";
import { Grid, Button, Box } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import history from "../../utils/history";

function Confirmed() {
  const { isValid } = useFormikContext();

  useEffect(() => {
    if (!isValid) {
      history.replace("/request/details");
    }
  }, [isValid]);

  return (
    <Grid container spacing={0}>
      <Grid item md={5} xs={12}>
        <div className="illustration" />
      </Grid>

      <Grid item md={7} xs={12}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100%" }}
        >
          <Box m={2}>
            <div className="request-children-wrapper">
              <div className="text-wrapper">
                <h1 className="text-alpha">
                  <FormattedMessage id="confirmation.content.header" />
                </h1>
                <h3 className="text-alpha">
                  <FormattedMessage id="confirmation.content.body" />
                </h3>

                <div className="action-wrapper">
                  <Link to="/">
                    <Button color="primary" variant="contained">
                      <FormattedMessage id="confirmation.buttons.home" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Confirmed;

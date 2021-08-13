import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* Title: Coronavirus cases */}
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        {/* +150k Number of cases */}
        <h2 className="infoBox__cases">{cases}</h2>
        {/* 1.2M Total */}
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;

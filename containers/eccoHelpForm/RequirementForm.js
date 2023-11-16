import { Button, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { RequirementFormContext } from "./RequirementFormContext";
import TextField from "./TextField";

const RequirementForm = () => {
  const { onChangeData, data } = useContext(RequirementFormContext);
  const onSubmit = () => {
    if (!data.name) {
      onChangeData({
        ...data,
        errorName: "لطفا نام و نام خانوادگی را وارد کنید",
      });
      return;
    }
    if (!data.contactChannel) {
      onChangeData({
        ...data,
        errorContact: "لطفا شماره تماس یا ایمیل خود را وارد کنید",
      });
      return;
    }
    delete data.errorContact
    delete data.errorName
    const requestOptions = {
      method: "GET",
      headers: {
        "access-control-allow-origin" : "*",
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    fetch(`https://eccohelp.com/booking?name=${data.name}&address=${data.address}&contactChannel=${data.contactChannel}&description=${data.description}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
      }
    }).catch((e)=>console.log(e));
  };
  return (
    <div>
      <React.Fragment>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              error={data.errorName}
              onChange={(e) =>
                onChangeData({
                  ...data,
                  name: e.target.value,
                  errorName: "",
                })
              }
              name="firstName"
              label="نام و نام خانوادگی"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={data.errorContact}
              onChange={(e) =>
                onChangeData({
                  ...data,
                  contactChannel: e.target.value,
                })
              }
              name="contactChannel"
              label="شماره تماس / ایمیل"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) =>
                onChangeData({
                  ...data,
                  address: e.target.value,
                  errorContact: "",
                })
              }
              name="address"
              label="آدرس"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={(e) =>
                onChangeData({
                  ...data,
                  description: e.target.value,
                })
              }
              name="description"
              label="نیازمندی"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
          onClick={onSubmit}
            sx={{
              background: "#5738F0",
              fontWeight: "bold",
              fontFamily: "Dana",
              color: "white",
              borderRadius: 40,
              width: "100%",
              height: 54,
              marginTop: 4,
              outline:"none"
            }}
            children={"ثبت"}
          />
        </Grid>
      </React.Fragment>
    </div>
  );
};

export default RequirementForm;

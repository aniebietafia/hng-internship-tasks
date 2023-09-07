/**
 * @description Takes two GET request query parameters and return specific information in JSON format
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @returns {object} JSON
 */

/*
The information required includes: slack name, Current day of the week, Current UTC Time (with validation of +/-2), track, The github url of the file being run, the github url of the full source code, a status code of success.
*/

export const getStageOneTask = async (req, res) => {
  try {
    const { slack_name, track } = req.query;

    if (!slack_name || !track) {
      return res.status(400).json({
        message: "error",
        error: "slack_name and track are required",
      });
    }

    const date = new Date();
    const days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const current_day_of_the_week = date.getDay();
    const day_of_the_week = days_of_the_week[current_day_of_the_week];

    // current UTC time, accurate within a +/-2 minute window.
    // const current_utc_time = JSON.stringify(date);
    const current_utc_time = date;

    // github url of the file being run
    const github_url_of_the_file_being_run =
      "https://github.com/aniebietafia/hng-internship-tasks/blob/main/stage_one_task/src/server.js";

    // github url of the full source code
    const github_url_of_the_full_source_code = "https://github.com/aniebietafia/hng-internship-tasks";

    // status code of success
    const status_code = 200;

    const data = {
      slack_name,
      day_of_the_week,
      current_utc_time,
      track,
      github_url_of_the_file_being_run,
      github_url_of_the_full_source_code,
      status_code,
    };

    // return res.status(200).json({
    //   message: "success",
    //   data,
    // });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};

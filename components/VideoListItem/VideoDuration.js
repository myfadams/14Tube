import moment from 'moment';
import 'moment-duration-format';

export const formatDuration = (duration) => {
  const formattedDuration = moment.duration(duration).format("h:mm:ss", { trim: false });
  return formattedDuration;
};

export const timeSinceUpload = (uploadTime) => {
  return moment(uploadTime).fromNow();
};

import React from 'react';
import * as cs from 'classnames';
import PropTypes from 'prop-types';

import styles from './CustomInput.module.scss';

function CustomInput({
  id, formik, type, labelTExt, isObligatory, value, onChange,
}) {
  CustomInput.propTypes = {
    id: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    labelTExt: PropTypes.string.isRequired,
    isObligatory: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  return (
    <div className={styles.customInputContainer}>
      <div className={styles.label}>
        {labelTExt}
        {
          isObligatory && formik?.values[id] === ''
          && <div className={styles.redStar}>*</div>
        }
      </div>
      <input
        value={formik?.values[id] || value}
        onChange={formik?.handleChange || onChange}
        onBlur={formik?.handleBlur}
        type={type}
        id={id}
        className={cs(
          styles.customInput,
          { [styles.errorInput]: formik?.touched[id] && formik?.errors[id] },
        )}
      />
      {formik?.touched[id] && formik?.errors[id] ? (
        <div className={styles.error}>{formik?.errors[id]}</div>
      ) : null}
    </div>
  );
}

export default CustomInput;

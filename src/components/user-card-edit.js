import React from "react";
import { Formik, FieldArray } from "formik";
import { Button } from "@material-ui/core";

export default class UserCardEdit extends React.Component {
    state = {
        data: {}
    }

    /**
     * Закрытие формы и передача управления родительскому компоненту
     */
    closeForm() {
        this.props.onClose();
    }

    render() {
        const {data, aclList} = this.props;
        return (
            <div>
                <Formik
                    initialValues={data}
                    onSubmit={(values, {setSubmitting}) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        this.closeForm.apply(this)

                    }}>
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleSubmit,
                            handleChange,
                            handleBlur
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name" style={{display: 'block'}}>
                                    User Name
                                </label>
                                <input
                                    id="name"
                                    placeholder="Enter user name"
                                    type="text"
                                    value={values.name}
                                    className={
                                        errors.name && touched.name ? 'text-input error' : 'text-input'
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <label htmlFor="email" style={{display: 'block'}}>
                                    Email
                                </label>
                                <input
                                    id="email"
                                    placeholder="Enter user's email"
                                    type="text"
                                    value={values.email}
                                    className={
                                        errors.email && touched.email ? 'text-input error' : 'text-input'
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <label htmlFor="phone" style={{display: 'block'}}>
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    placeholder="Enter user phone"
                                    type="text"
                                    value={values.phone}
                                    className={
                                        errors.phone && touched.phone ? 'text-input error' : 'text-input'
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FieldArray
                                    name="acls"
                                    render={arrayHelpers => (
                                        <div>
                                            {Object.entries(aclList).map(([id, name]) => (
                                                <div key={id}>
                                                    <input
                                                        name="acls"
                                                        type="checkbox"
                                                        value={id}
                                                        checked={values.acls.includes(id*1)}
                                                        onChange={e => {
                                                            if (e.target.checked) arrayHelpers.push(id*1);
                                                            else {
                                                                const idx = values.acls.indexOf(id*1);
                                                                arrayHelpers.remove(idx);
                                                            }
                                                        }}
                                                    />{name}
                                                </div>
                                                ))}
                                        </div>
                                    )}
                                />

                                <p>
                                    <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                                        Сохранить
                                    </Button>
                                    <Button onClick={this.closeForm.bind(this)}>
                                        Закрыть
                                    </Button>
                                </p>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        )
    }
}

export default class Form {
    form: any; 
    constructor(form: object) {
        this.form = form;
    }

    fields() {
        return this.form;
    }

    getFieldValue(name: string) {
        return this.form[name].value;
    }

    getLoading() {
        return this.form.loading;
    }

    getFormData() {
        let data = {};
        Object.keys(this.form).map((key) => {
            if (this.form[key].type === 'file') {
                let files = [] as any;
                if (this.form[key].value) {
                    this.form[key].value.forEach((item: any, key: number) => {
                        files[key] = item.getFileEncodeBase64String();
                    });
                }
                data[key] = files;
            } else {
                data[key] = this.form[key].value;
            }
        });
        return data;
    }

    setFormData(data: any) {
        Object.keys(data).map((key) => {
            this.form[key].value = data[key];
        });
    }

    updateFormData(data: {name: string, value: string}) {
        this.form[data.name].value = data.value;
    }

    setErrors(data: object) {
        this.form['errors'] = data;
    }

    setLoading(isLoad: boolean = false) {
        this.form.loading = isLoad;
    }

    setOptions(name: string, options: object) {
        this.form[name]['options'] = options;
    }

    setVisible(name: string, visible: boolean = true) {
        this.form[name].visible = visible;
    }
}
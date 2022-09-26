import { useEffect } from "react";

const hubspotContactForm: React.FC<any> = ({
  region,
  portalId,
  formId,
  target,
}) => {
  useEffect(() => {
    // @ts-expect-error
    if (window.__hubspot_initialized) {
      return;
    }

    // @ts-expect-error
    hbspt.forms.create({
      region: region,
      portalId: portalId,
      formId: formId,
      target: target,
    });

    // @ts-expect-error
    window.__hubspot_initialized = true;
  }, []);

  return (
    <div className="hubspot-form">
      <script
        charSet="utf-8"
        type="text/javascript"
        src="//js.hsforms.net/forms/v2.js?pre=1"
      ></script>

      <div className="hubspot-form__layout">
        <div id="hubspotForm"></div>
        <div className="hubspot-form__background">
          <span className="hubspot-form__line"></span>
          <span className="hubspot-form__line"></span>
          <span className="hubspot-form__line"></span>
          <span className="hubspot-form__line"></span>
        </div>
      </div>
    </div>
  );
};

export default hubspotContactForm;

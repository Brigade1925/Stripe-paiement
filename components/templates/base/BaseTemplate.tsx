export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="text-red-600">{sampleTextProp}</div>;
};

export default BaseTemplate;

import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  message: string;
  emailAddress: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  message,
  emailAddress,
}) => (
  <div style={{
    backgroundColor: '#ffffff',
    padding: '40px 20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#333333',
  }}>
    <div style={{
      textAlign: 'center',
      marginBottom: '30px',
      borderBottom: '1px solid #eaeaea',
      paddingBottom: '20px',
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 600,
        color: '#111111',
        margin: '0 0 10px',
      }}>
        New Contact Message
      </h1>
      <p style={{
        fontSize: '16px',
        color: '#666666',
        margin: '0',
      }}>
        From {firstName} {lastName}
      </p>
    </div>

    <div style={{
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '6px',
      marginBottom: '20px',
    }}>
      <p style={{
        fontSize: '16px',
        lineHeight: '1.6',
        margin: '0',
        whiteSpace: 'pre-wrap',
      }}>
        {message}
      </p>
    </div>

    <div style={{
      borderTop: '1px solid #eaeaea',
      paddingTop: '20px',
      fontSize: '14px',
      color: '#666666',
    }}>
      <p style={{ margin: '0' }}>
        Reply to: <a href={`mailto:${emailAddress}`} style={{ color: '#0066cc', textDecoration: 'none' }}>
          {emailAddress}
        </a>
      </p>
    </div>
  </div>
);
